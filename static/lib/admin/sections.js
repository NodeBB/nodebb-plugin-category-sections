"use strict";
/* global app, define, templates, socket */

define('admin/plugins/category-sections', ['settings'], function(settings) {
	var admin = {};

	admin.init = function() {
		activateUI();
		$('#new').on('click', newSection);
		$('#save').on('click', saveSections);
	};

	function newSection() {
		templates.parse('admin/plugins/category-sections', 'sections', {sections: [{name: "Untitled Section", categories: []}]}, function(li) {
			$('.sections').append($(li));
			activateUI();
		});
	}

	function activateUI() {
		$('.section-sortable')
			.sortable({
				connectWith: '.section-sortable'
			})
			.droppable({
				accept: $('.category-selector')
			});

		$('.category-selector')
			.draggable({
				connectToSortable: '.section-sortable',
				distance: 10,
				helper: function(ev, ui) {
					$(ev.target).removeAttr('style');
				}
			});
	}

	function saveSections() {
		var sections = [];

		$('.sections .section').each(function() {
			var cids = [];

			$(this).find('.category-selector').each(function() {
				cids.push($(this).find('[name="cid"]').val());
			});

			sections.push({
				name: $(this).find('[name="name"]').val(),
				cids: cids
			});
		});

		console.log(sections);

		socket.emit('plugins.category-sections.save', sections, function(err) {
			if (err) {
				app.alertError(err.message);
			} else {
				app.alertSuccess('Successfully saved category sections');
			}
		});
	}

	return admin;
});

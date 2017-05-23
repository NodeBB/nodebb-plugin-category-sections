"use strict";
/* global app, define, templates, socket */

define('admin/plugins/category-sections', ['settings'], function(settings) {
	var admin = {};

	admin.init = function() {
		$(document).ready(function() {
			app.loadJQueryUI(activateUI);
			$('#new').on('click', newSection);
			$('#save').on('click', saveSections);
			$('.delete').on('click', deleteSection);
		});
	};

	function newSection() {
		templates.parse('admin/plugins/category-sections', 'data.sections', {'data.sections': [{name: "Untitled Section", categories: []}]}, function(li) {
			$('.sections').append($(li));
			app.loadJQueryUI(activateUI);
		});
	}

	function deleteSection(ev) {
		var parent = $(this).parents('form'),
			categories = parent.find('.category-selector').appendTo($('#uncategorized').find('.section-sortable'));

		parent.remove();

		ev.preventDefault();
		return false;
	}

	function activateUI() {
		$('.section-sortable')
			.sortable({
				connectWith: '.section-sortable'
			})
			.droppable({
				accept: $('.category-selector')
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
		
		sections = JSON.stringify(sections);

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

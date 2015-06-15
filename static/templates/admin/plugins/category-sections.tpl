<div class="row category-sections">
	<div class="col-lg-5">
		<div class="panel panel-default">
			<div class="panel-heading">Category Sections</div>
			<div class="panel-body sections">
				<!-- BEGIN data.sections -->
				<form role="form">
					<div class="well section">
						<label for="name">Section Name
							<input type="text" class="form-control" name="name" value="{data.sections.name}" />
						</label>
						<button class="btn btn-danger delete pull-right">Delete</button>
						<hr />
						<div class="section-sortable">
							<!-- BEGIN categories -->
							<div class="panel panel-body category-selector">
								<h3>{data.sections.categories.name} <br /><small>{data.sections.categories.description}</small></h3>
								<input type="hidden" name="cid" value="{data.sections.categories.cid}" />
							</div>
							<!-- END categories -->
						</div>
					</div>
				</form>
				<!-- END data.sections -->
			</div>
		</div>
		<div class="spacer"></div>
	</div>

	<div class="col-lg-4">
		<div class="panel panel-default" id="uncategorized">
			<div class="panel-heading">Uncategorized</div>
			<div class="panel-body">
				<form role="form">
					<div class="section-sortable">
						<!-- BEGIN data.uncategorized -->
						<div class="panel panel-body category-selector">
							<h3>{data.uncategorized.name} <br /><small>{data.uncategorized.description}</small></h3>
							<input type="hidden" name="cid" value="{data.uncategorized.cid}" />
						</div>
						<!-- END data.uncategorized -->
					</div>
				</form>
			</div>
		</div>
	</div>
	<div class="col-lg-3">
		<div class="panel panel-default">
			<div class="panel-heading">Control Panel</div>
			<div class="panel-body">
				<button class="btn btn-success" id="new">New Section</button>
				<button class="btn btn-primary" id="save">Save Sections</button>
			</div>
		</div>
	</div>
</div>
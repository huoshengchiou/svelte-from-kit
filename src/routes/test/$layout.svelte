<!-- can create a layout that only applies to pages  (while inheriting the root layout with the top-level nav): -->

<div class="nestWrapper">
	<slot />
</div>

<style>
	.nestWrapper {
		width: 200px;
		height: 200px;
		background: lightblue;
	}
</style>

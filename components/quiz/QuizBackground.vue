<template>
	<div class="ui-background"><slot /></div>
</template>

<style lang="scss" scoped>
	.ui-background {
		width: 100%;
		height: 100%;
		border-radius: 5px;
		background: #fff;
		position: relative;
		box-shadow: 0px 7px 0px 0px #DEDEDE;
		overflow: hidden;
	}
</style>
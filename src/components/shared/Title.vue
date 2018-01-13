<template>
  <div class="title-container">
    <h1 class="title-name">{{ pageTitle }}</h1>
  </div>
</template>

<script>
export default {
	props: {
		pageTitle: String
	}
};
</script>

<style lang="sass" scoped>
@mixin center-flex
	display: flex
	justify-content: center
	align-items: center
	display: -webkit-box
	-webkit-box-align: center
	-webkit-box-pack: center
	display: -ms-flexbox
	-ms-flex-align: center
	-ms-flex-pack: center

.title-container
	grid-area: title
	@include center-flex

.title-name
  font-family: 'Monoton', cursive
  font-size: 40px


</style>

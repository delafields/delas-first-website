<template>
  <div class="header">
    <router-link :to="leftLinkPath" class="header-link left">{{ leftLinkName }}</router-link>
    <a :href="rightLinkPath" class="header-link right"> {{ rightLinkName }} </a>
  </div>
</template>

<script>
export default {
	props: {
		leftLinkPath: String,
		leftLinkName: String,
		rightLinkPath: String,
		rightLinkName: String
	}
};
</script>

<style lang="sass" scoped>
$shadow-red: rgba(255, 23, 68, 0.60)
$shadow-white: rgba(255, 255, 255, 0.4)

@mixin prefixed-flex
  grid-area: header
  display: -webkit-box
  display: -ms-flexbox
  display: flex
  -webkit-box-pack: justify
  -ms-flex-pack: justify
  justify-content: space-between
  -webkit-box-align: center
  -ms-flex-align: center
  align-items: center

.header
  grid-area: header
  @include prefixed-flex

.header-link
  padding: 20px

//–––––––––––––––––––––––––––––––––-––––––––––––––––––––––––––––––––––––––––––––
//					Typography
//–––––––––––––––––––––––––––––––––-––––––––––––––––––––––––––––––––––––––––––––
.header-link
  font-family: 'News Cycle', sans-serif
  color: black
  font-size: 20px
  text-decoration: none
  -webkit-transition: text-shadow .2s ease-in-out
  -o-transition: text-shadow .2s ease-in-out
  transition: text-shadow .2s ease-in-out

.left:hover
  text-shadow: 4px 3px 3px $shadow-red, 1px 1px 3px $shadow-white
.right:hover
  text-shadow: -4px 3px 3px $shadow-red, -1px 1px 3px $shadow-white

</style>

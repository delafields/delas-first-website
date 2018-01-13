<template>
  <div class="site">

    <shared-secret-header
    leftLinkPath="/projects"
    leftLinkName="←PROJECTS"
    rightLinkPath="https://github.com/delafields/delafields.github.io"
    rightLinkName="VIEW REPO"
    >
    </shared-secret-header>

    <img class="spiral" src="./assets/CONFUSION.png" alt="text-spiral">

  </div>
</template>

<script>
import SecretHeader from './shared/SecretHeader.vue';

export default {
	components: {
		sharedSecretHeader: SecretHeader
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

//–––––––––––––––––––––––––––––––––-––––––––––––––––––––––––––––––––––––––––––––
//					General Styles
//–––––––––––––––––––––––––––––––––-––––––––––––––––––––––––––––––––––––––––––––
.site
  grid-template-columns: 10vw 80vw 10vw
  grid-template-rows: 20vh 80vh
  grid-template-areas: ". header ." "spiral spiral spiral"

.header
  grid-area: header
  @include prefixed-flex

.header-link
  padding: 20px

.spiral
  grid-area: spiral
  width: 100%
  height: 100%
  animation: spinMe 8s forwards linear infinite
  -webkit-animation: spinMe 8s forwards linear infinite

//–––––––––––––––––––––––––––––––––-––––––––––––––––––––––––––––––––––––––––––––
//					Typography
//–––––––––––––––––––––––––––––––––-––––––––––––––––––––––––––––––––––––––––––––
.header-link
  color: black
  font-family: 'News Cycle', sans-serif
  font-size: 20px
  text-decoration: none
  -webkit-transition: text-shadow .2s ease-in-out
  -o-transition: text-shadow .2s ease-in-out
  transition: text-shadow .2s ease-in-out

.left:hover
  text-shadow: 4px 3px 3px $shadow-red, 1px 1px 3px $shadow-white
.right:hover
  text-shadow: -4px 3px 3px $shadow-red, -1px 1px 3px $shadow-white


//–––––––––––––––––––––––––––––––––-––––––––––––––––––––––––––––––––––––––––––––
//					Animations
//–––––––––––––––––––––––––––––––––-––––––––––––––––––––––––––––––––––––––––––––
@keyframes spinMe
  0%
    transform: rotate(0turn)
  100%
    transform: rotate(1turn)

@-webkit-keyframes spinMe
  0%
    transform: rotate(0turn)
  100%
    transform: rotate(1turn)
</style>

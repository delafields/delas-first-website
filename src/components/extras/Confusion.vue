<template>
  <div class="site">

    <shared-secret-header
    leftLinkPath="/projects"
    leftLinkName="←PROJECTS"
    rightLinkPath="https://github.com/delafields/delafields.github.io"
    rightLinkName="VIEW REPO"
    >
    </shared-secret-header>

    <img class="spiral" src="../../assets/CONFUSION.png" alt="text-spiral">

  </div>
</template>

<script>
import SecretHeader from '../shared/SecretHeader.vue';

export default {
	components: {
		sharedSecretHeader: SecretHeader
	}
};
</script>

<style lang="sass" scoped>

//–––––––––––––––––––––––––––––––––-––––––––––––––––––––––––––––––––––––––––––––
//					General Styles
//–––––––––––––––––––––––––––––––––-––––––––––––––––––––––––––––––––––––––––––––
.site
  grid-template-columns: 10vw 80vw 10vw
  grid-template-rows: 20vh 80vh
  grid-template-areas: ". header ." "spiral spiral spiral"

.spiral
  grid-area: spiral
  width: 100%
  height: 100%
  animation: spinMe 8s forwards linear infinite
  -webkit-animation: spinMe 8s forwards linear infinite


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

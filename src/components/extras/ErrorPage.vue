<template>
  <div class="site">

    <shared-secret-header
    leftLinkPath="/"
    leftLinkName="←HOME"
    rightLinkPath="https://www.youtube.com/results?search_query=et+the+game"
    rightLinkName="PHONE HOME?"
    >
    </shared-secret-header>

    <img class="ET" src="../../assets/ET_404.svg" alt="404 image">

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
  grid-template-areas: ". header ." "ET ET ET"

.ET
  grid-area: ET
  width: 100%
  height: 100%
</style>

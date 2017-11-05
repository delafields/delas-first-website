<template>
  <div class="footer">
    <router-link :to="leftLinkPath" class="footer-link">{{ leftLinkName }}</router-link>
    <router-link :to="rightLinkPath" class="footer-link">{{ rightLinkName }}</router-link>
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

<style lang="sass">
  $shadow-red: rgba(255, 23, 68, 0.60)
  $shadow-white: rgba(255, 255, 255, 0.4)

  @mixin left-route-shadow
    text-shadow: 4px 3px 3px $shadow-red, 1px 1px 3px $shadow-white

  @mixin right-route-shadow
    text-shadow: -4px 3px 3px $shadow-red, -1px 1px 3px $shadow-white

  //–––––––––––––––––––––––––––––––––-––––––––––––––––––––––––––––––––––––––––––––
  //			   General Styles
  //–––––––––––––––––––––––––––––––––-––––––––––––––––––––––––––––––––––––––––––––
  .footer
    grid-area: footer
    display: flex
    align-items: center

  .footer-link
    padding: 0 30px

  //–––––––––––––––––––––––––––––––––-––––––––––––––––––––––––––––––––––––––––––––
  //			   Typography
  //–––––––––––––––––––––––––––––––––-––––––––––––––––––––––––––––––––––––––––––––
  .footer-link
    color: black
    font-family: 'News Cycle', sans-serif
    font-size: 30px
    text-decoration: none
    &:visited, &:active
      text-shadow: none

  //–––––––––––––––––––––––––––––––––-––––––––––––––––––––––––––––––––––––––––––––
  //			   Large Screen Styles
  //–––––––––––––––––––––––––––––––––-––––––––––––––––––––––––––––––––––––––––––––
  @media screen and (min-width: 801px)
    .footer-link
      -webkit-transition: text-shadow .2s ease-in-out
      -o-transition: text-shadow .2s ease-in-out
      transition: text-shadow .2s ease-in-out
      &:first-child:hover
        @include left-route-shadow
      &:last-child:hover
        @include right-route-shadow

  //–––––––––––––––––––––––––––––––––-––––––––––––––––––––––––––––––––––––––––––––
  //			   >= Tablet Styles
  //–––––––––––––––––––––––––––––––––-––––––––––––––––––––––––––––––––––––––––––––
  @media screen and (min-width: 501px)
    .footer
      justify-content: space-between
      
  //–––––––––––––––––––––––––––––––––-––––––––––––––––––––––––––––––––––––––––––––
  //			   Mobile Styles
  //–––––––––––––––––––––––––––––––––-––––––––––––––––––––––––––––––––––––––––––––
  @media screen and (max-width: 500px)
    .footer
      justify-content: space-around
</style>

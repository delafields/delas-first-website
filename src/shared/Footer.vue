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

  @mixin footer-shadow-left
    text-shadow: 4px 3px 3px $shadow-red, 1px 1px 3px $shadow-white

  @mixin footer-shadow-right
    text-shadow: -4px 3px 3px $shadow-red, -1px 1px 3px $shadow-white

  @mixin footer-link-typography
    color: black
    font-family: 'News Cycle', sans-serif
    font-size: 30px
    text-decoration: none

  .footer
  	grid-area: footer
  	display: flex
  	align-items: center

  .footer-link
    @include footer-link-typography
    padding: 0 30px
    &:visited, &:active
      text-shadow: none

  @media screen and (min-width: 801px)
    .footer
      justify-content: space-between
    .footer-link
      -webkit-transition: text-shadow .2s ease-in-out
      -o-transition: text-shadow .2s ease-in-out
      transition: text-shadow .2s ease-in-out
      &:first-child:hover
        @include footer-shadow-left
      &:last-child:hover
        @include footer-shadow-right

  @media screen and (max-width: 800px)
    .footer
      justify-content: space-around
</style>

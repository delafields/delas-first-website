<template>
  <div class="site">

    <div class="header">
      <router-link to="/" class="header-link left">←Home</router-link>
      <a href="https://www.youtube.com/results?search_query=et+the+game" class="header-link right">Phone Home?</a>
    </div>

    <img class="ET" src="./assets/ET_404.svg" alt="404 image">

  </div>
</template>

<script>
export default {};
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
  grid-template-areas: ". header ." "ET ET ET"

.header
  grid-area: header
  @include prefixed-flex

.header-link
  padding: 20px

.ET
  grid-area: ET
  width: 100%
  height: 100%

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
</style>

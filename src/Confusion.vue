<template>
  <div class="site">

    <div class="header">
      <router-link to="/projects" class="header-link left">←Projects</router-link>
      <a href="https://github.com/delafields/delafields.github.io" class="header-link right">View Source</a>
    </div>

    <img class="spiral" src="./assets/CONFUSION.png" alt="text-spiral">

  </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
$shadow-red: rgba(255, 23, 68, 0.60)
$shadow-white: rgba(255, 255, 255, 0.4)

.site
  grid-template-columns: 10vw 80vw 10vw
  grid-template-rows: 20vh 80vh
  grid-template-areas: ". header ." "spiral spiral spiral"

.header
  grid-area: header
  display: flex
  justify-content: space-between
  align-items: center

.header-link
  color: black
  font-family: 'News Cycle', sans-serif
  font-size: 20px
  text-decoration: none
  padding: 20px
  -webkit-transition: text-shadow .2s ease-in-out
  -o-transition: text-shadow .2s ease-in-out
  transition: text-shadow .2s ease-in-out

.left:hover
  text-shadow: 4px 3px 3px $shadow-red, 1px 1px 3px $shadow-white
.right:hover
  text-shadow: -4px 3px 3px $shadow-red, -1px 1px 3px $shadow-white

.spiral
  grid-area: spiral
  width: 100%
  height: 100%
  animation: spinMe 8s forwards linear infinite

@keyframes spinMe
  0%
    transform: rotate(0turn)
  100%
    transform: rotate(1turn)

</style>

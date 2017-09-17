<template>
  <div class="wrapper">
    <div class="one">One</div>
    <div class="two">Two</div>
    <div class="three">Three</div>
    <div class="four">Four</div>
    <div class="five">Five</div>
    <div class="six">Six</div>
  </div>
</template>

<script>

</script>


<style lang="sass">
  *
    box-sizing: border-box
    padding: 0
    margin: 0

  .wrapper
    display: grid
    border-style: solid
    border-color: red
    grid-template-columns: repeat(3, 1fr)
    grid-template-rows: repeat(3, 1fr)
    grid-gap: 10px
    width: 100vw
    height: 100vh

  .one
    border-style: solid
    border-color: blue
    grid-column: 1 / 3
    grid-row: 1

  .two
    border-style: solid
    border-color: yellow
    grid-column: 2 / 4
    grid-row: 1 / 3

  .three
    border-style: solid
    border-color: violet
    grid-row: 2 / 5
    grid-column: 1

  .four
    border-style: solid
    border-color: aqua
    grid-column: 3
    grid-row: 3

  .five
    border-style: solid
    border-color: green
    grid-column: 2
    grid-row: 4

  .six
    border-style: solid
    border-color: purple
    grid-column: 3
    grid-row: 4


</style>

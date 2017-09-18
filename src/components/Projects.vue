<template>
  <div class="fullscreen-wrapper">
      <div class="physical-sort">
        <i class="material-icons">build</i>
      </div>
      <div class="title-bar">
        <h1>⇩PROJECTS⇩</h1>
      </div>
      <div class="code-sort">
        <i class="material-icons">code</i>
      </div>
      <div class="projects-body">PROJECTS</div>
  </div>
</template>

<script>
</script>


<style lang="sass" scoped>
  $bg-color: #263238
  $yeller: 	#ECE942


  @mixin neon-glow
    font-family: 'Monoton', sans-serif
    text-shadow: 2px 2px 8px red, 0 0 5px white
    color: $yeller

  *
    box-sizing: border-box
    padding: 0
    margin: 0
    text-decoration: none

  .fullscreen-wrapper
    display: grid
    height: 100vh
    width: 100vw
    border: 1px solid red
    background-color: $bg-color
    grid-template-rows: [header-start] 10vh [header-end body-start] auto [body-end]
    grid-template-columns: [page-left] 5vw [left-gutter] 5vw [left-title] 80vw [right-title] 5vw [right-gutter] 5vw [page-right]

  .physical-sort
    border: 1px solid blue
    grid-area: [header-start] / [page-left] / [header-end] / [left-title]
    align-self: center
    justify-self: center

  .code-sort
    border: 1px solid blue
    grid-area: [header-start] / [right-title] / [header-end] / [page-right]
    align-self: center
    justify-self: center

  .title-bar
    border: 1px solid green
    grid-area: [header-start] / [left-title] / [header-end] / [right-title]
    align-self: center
    justify-self: center
    h1
      @include neon-glow
      font-size: 60px


  .projects-body
    border: 1px solid yellow
    grid-area: [body-start] / [page-left] / [body-end] / [page-right]

  .material-icons
    color: white
    font-size: 4rem
    

</style>

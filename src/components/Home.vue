<template>
  <div class="fullscreen-wrapper" id="blue-background">
    <div class="socials">
      <a class="home-link" :href="links.blog">BLOG </a>
      <a class="home-link" :href="links.twitter">TWITTER </a>
      <a class="home-link" :href="links.github">GITHUB </a>
    </div>
    <div class="contact">
      <a class="home-link" :href="links.email" id="contact">CONTACT</a>
    </div>
    <div class="title">
      <div id="title-wrapper">
        <router-link to="/projects">
          <h1 id="flicker">I &nbsp;build &nbsp;stuff.</h1>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
	data() {
		return {
			links: {
				blog: 'https://medium.com/@JeremyFields',
				twitter: 'https://twitter.com/DeLaFields',
				github: 'https://github.com/delafields',
				email: 'mailto:badatfun@gmail.com'
			}
		};
	}
};
</script>


<style lang="sass">
  $bg-color: #263238
  $yeller: 	#ECE942
  $emerald: #21B6A8
  $cerulean: #7DA3AC
  $chili-chocolate: #7F1769
  $sweet-pink: #FFCBF4
  $mexican-sand: #B69521
  $harvest-white: #FFF4CB
  $colors: $emerald, $harvest-white, $sweet-pink, $mexican-sand, $cerulean, $chili-chocolate

  @mixin neon-glow
    text-shadow: 4px 3px 3px rgba(255, 23, 68, 0.60), 1px 1px 3px rgba(255, 255, 255, 0.4)
  @mixin webkit-neon-glow
    -webkit-text-shadow: 4px 3px 3px rgba(255, 23, 68, 0.60), 1px 1px 3px rgba(255, 255, 255, 0.4)

  *
    box-sizing: border-box
    padding: 0
    margin: 0

  .fullscreen-wrapper
    display: grid
    background-color: $bg-color
    grid-template-rows: [row-1] 5% [row-2] 10% [row-3] auto [row-end]
    grid-template-columns: [col-1] 5% [col-2] auto [col-end]
    width: 100vw
    height: 100vh

  .home-link
    color: white
    font-size: 2vw
    font-family: 'Archivo Black', sans-serif
    text-decoration: none

  .socials
    grid-area: 1 / 2
    align-self: center
    padding-top: 10px
    @for $i from 1 through length($colors)
      a:nth-child(#{length($colors)}n+#{$i})
        &:hover
          color: nth($colors, $i)
          text-decoration: none
        &:focus
          text-decoration: none

  .contact
    grid-area: 2 / 1
    justify-self: center
    a
      writing-mode: vertical-lr
      &:hover, &:focus
        color: $cerulean
        text-decoration: none

  .title
    grid-area: [row-1] / [col-1] / [row-end] / [col-end]
    justify-self: center
    align-self: center

  #title-wrapper
    transform: skewX(-6deg) rotate(-12deg) skewY(6deg) skewX(-12deg)
    h1
      @include neon-glow
      font-family: 'Monoton', sans-serif
      font-size: 50px
      color: #FF1744
      &:hover
        color: $yeller
    a
      text-decoration: none

  #blue-background
    animation: brightenUp 0.5s 1 forwards ease-in
    animation-delay: 10.5s
    webkit-animation: brightenUp 0.5s 1 forwards ease-in
    webkit-animation-delay: 10.5s

  @keyframes brightenUp
    0%
      background-color: $bg-color
    100%
      background-color: blue

  #flicker
    animation: flicker 7s 1 forwards
    animation-delay: 4s
    webkit-animation: flicker 7s 1 forwards
    webkit-animation-delay: 4s

  @keyframes flicker
    17%
      text-shadow: none
    18%
      @include neon-glow
    19%
      text-shadow: none
    27%
      text-shadow: none
    30%
      @include neon-glow
    31%
      text-shadow: none
    32%
      @include neon-glow
    33%
      text-shadow: none
    34%
      @include neon-glow
    35%
      text-shadow: none
    50%
      text-shadow: none
    56%
      @include neon-glow
    60%
      text-shadow: none
    62%
      @include neon-glow
    96%
      @include neon-glow
    97%
      text-shadow: none
    99%
      @include neon-glow
    100%
      @include neon-glow

  @-webkit-keyframes flicker
    17%
      -webkit-text-shadow: none
    18%
      @include webkit-neon-glow
    19%
      -webkit-text-shadow: none
    27%
      -webkit-text-shadow: none
    30%
      @include webkit-neon-glow
    31%
      -webkit-text-shadow: none
    32%
      @include webkit-neon-glow
    33%
      -webkit-text-shadow: none
    34%
      @include webkit-neon-glow
    35%
      -webkit-text-shadow: none
    50%
      -webkit-text-shadow: none
    56%
      @include webkit-neon-glow
    60%
      -webkit-text-shadow: none
    62%
      @include webkit-neon-glow
    96%
      @include webkit-neon-glow
    97%
      -webkit-text-shadow: none
    99%
      @include webkit-neon-glow
    100%
      @include webkit-neon-glow


</style>

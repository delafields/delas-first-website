<template>
  <div class="fullscreen-wrapper">
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
          <h5 id="blink">↑CHECK THE STUFF OUT↑</h5>
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


<style lang="sass" scoped>
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
    text-decoration: none



  .fullscreen-wrapper
    display: grid
    width: 100vw
    height: 100vh
    background-color: $bg-color
    grid-template-rows: [header-start] 10vh [header-end contact-row-start] 10vh [contact-row-end] auto [bottom-page]
    grid-template-columns: [contact-col-start] 7vh [contact-col-end] auto [right-page]

  .home-link
    color: white
    font-size: 25px
    font-family: 'Archivo Black', sans-serif

  .socials
    grid-area: [header-start] / [contact-col-end] / [header-end] / [right-page]
    align-self: center
    @for $i from 1 through length($colors)
      a:nth-child(#{length($colors)}n+#{$i})
        &:hover
          color: nth($colors, $i)

  .contact
    grid-area: [contact-row-start] / [contact-col-start] / [contact-row-end] / [contact-col-end]
    justify-self: center
    a
      writing-mode: vertical-lr
      //&:hover, &:focus
        color: $chili-chocolate


  .title
    grid-area: [header-start] / [contact-col-start] / [bottom-page] / [right-page]
    justify-self: center
    align-self: center

  #title-wrapper
    text-align: center
    transform: skewX(-6deg) rotate(-12deg) skewY(6deg) skewX(-12deg)

    h1
      @include neon-glow
      font-family: 'Monoton', sans-serif
      font-size: 50px
      color: #FF1744
      &:hover
        color: $yeller

    h5
      font-size: 16px
      color: white
      font-family: 'Anton', sans-serif
      letter-spacing: 1px

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

  #blink
    opacity: 0
    animation: blink 1s 1 forwards
    animation-delay: 12s
    webkit-animation: blink 1s 1 forwards
    webkit-animation-delay: 12s

    @keyframes blink
      100%
        opacity: 1
    @-webkit-keyframes flicker
      100%
        -webkit-opacity: 1

</style>

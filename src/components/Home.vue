<template>
  <div class="site">
    <div class="socials">
      <a class="home-link" :href="links.blog">BLOG </a>
      <a class="home-link" :href="links.twitter">TWITTER </a>
      <a class="home-link" :href="links.github">GITHUB </a>
    </div>
    <div class="contact">
      <a class="home-link" :href="links.email">CONTACT</a>
    </div>
    <div class="title">
      <router-link to="/projects">
        <h1 id="flicker">I &nbsp;build &nbsp;stuff.</h1>
        <h5 id="blink">↑CHECK THE STUFF OUT↑</h5>
      </router-link>
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
  // –––––––––––––––––––––––––––
  //      Colors & Mixins
  // –––––––––––––––––––––––––––
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

  //  –––––––––––––––––––––––––––
  //       CSS Reset
  //  –––––––––––––––––––––––––––
  html, *, body
    box-sizing: border-box
    margin: 0
    padding: 0
    text-decoration: none

  // –––––––––––––––––––––––––––
  //        Typography
  // –––––––––––––––––––––––––––
  .home-link
    color: white
    font-size: 25px
    font-family: 'Archivo Black', sans-serif

  .socials
    @for $i from 1 through length($colors)
      a:nth-child(#{length($colors)}n+#{$i})
        &:hover
          color: nth($colors, $i)

  .contact
    a:hover
      color: $chili-chocolate

  .title
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
      font-family: 'Roboto', sans-serif
      letter-spacing: 1px

  @media screen and (max-width: 499px)
    .home-link
      font-size: 23px

  // –––––––––––––––––––––––––––
  //        General Styles
  // –––––––––––––––––––––––––––

  .title
    text-align: center
    transform: skewX(-6deg) rotate(-12deg) skewY(6deg) skewX(-12deg)

  //–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //   Grid layout for small screen
  //–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  @media screen and (max-width: 499px)
    .site
      display: grid
      grid-template-columns: auto
      grid-template-rows: 10vh auto 10vh
      grid-template-areas: "socials" "title" "contact"
      height: 100vh
      width: 100vw
      align-items: center
      justify-items: center

    .contact
      grid-area: contact
    .socials
      grid-area: socials
    .title
      grid-area: title

  //–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //   Grid layout for wider screens, when browser supports grid:
  //–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  @supports (display: grid)
    @media screen and (min-width: 500px)

      .site
        display: grid
        grid-template-columns: 7vh auto
        grid-template-rows: 10vh 10vh auto
        grid-template-areas: ". socials" "contact ."
        align-items: center
        width: 100vw
        height: 100vh

      .contact
        grid-area: contact
        justify-self: center
        a
          writing-mode: vertical-lr

      .socials
        grid-area: socials
        justify-self: start

      .title
        grid-area: 1 / 1 / 4 / 3
        justify-self: center


  //–––––––––––––––––––––––––––
  //        Animations
  //–––––––––––––––––––––––––––

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

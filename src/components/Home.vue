<template>
  <div>
    <div class="row" id="socials">
        <a href="https://medium.com/@JeremyFields" class="landingLink" role="button">BLOG </a>
        <a href="https://twitter.com/DeLaFields" class="landingLink" role="button" >TWITTER </a>
        <a href="https://github.com/delafields" class="landingLink" role="button">GITHUB </a>
    </div>
    <a href="mailto:j.c.delafields@gmail.com" id="contact" class="landingLink" role="button">CONTACT</a>
    <div class="row" id="greeting-wrapper">
      <router-link to="/projects"><h1 class="tilt" id="flicker">I &nbsp;build &nbsp;stuff.</h1></router-link>
      <h5 class="tilt" id="blink">↑CLICK ME↑</h5>
    </div>
  </div>
</template>

<style lang="sass">
  @mixin small-phone
    @media only screen and (max-width : 320px)
      @content

  /*    Colors    */
  $bg-color: #263238
  $peach: #FD7774
  $yeller: 	#ECE942
  $mustard: #FEB511

  /*    70s Pallete   */
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

  body
    background-color: $bg-color

  .landingLink
    color: white
    font-size: 20px
    font-family: 'Archivo Black', sans-serif

  #contact
    writing-mode: vertical-lr
    padding-left: 20px
    &:hover
      text-decoration: none
      color: $cerulean
    &:focus
      text-decoration: none
    @include small-phone
      padding-left: 10px

  #socials
    padding-top: 20px
    padding-left: 60px
    @for $i from 1 through length($colors)
      // Colors social link hover
      a:nth-child(#{length($colors)}n+#{$i})
        &:hover
          color: nth($colors, $i)
          text-decoration: none
        &:focus
          text-decoration: none
    @include small-phone
      padding-left: 50px

  #greeting-wrapper
    position: absolute
    top: 45%
    left: 50%
    width: 40%
    transform: translate(-50%, -50%)
    text-align: center
    .tilt
      transform: skewX(-6deg) rotate(-12deg) skewY(6deg) skewX(-12deg)
    h1
      font-family: 'Monoton', sans-serif
      font-size: 50px
      color: #FF1744
      &:hover
        color: $yeller
    h5
      color: white
      font-family: 'Anton', sans-serif
      margin-top: -10px
      letter-spacing: 1px
      @include small-phone
        padding-left: 30px
    a
      text-decoration: none

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

<template>
  <div class="site">

    <div class="header">
      <div class="title">
        <h1>⇩PROJECTS⇩</h1>
      </div>
    </div>

    <div class="content-wrapper">
      <div
        class="content-item"
        v-for="project in projects"
      >
          <h3 class="content-description">{{project.description}}</h3>
          <h4 class="content-title">{{project.title}}</h4>
          <button class="content-link">
            <h4>VIEW WORK</h4>
          </button>
      </div>
    </div>

    <div class="footer">
      <router-link to="/">
        <h1>HOME</h1>
      </router-link>
    </div>

  </div>

</template>


<script>
export default {
	data() {
		return {
			projects: [
				{
					title: 'Standing Desk',
					description:
						'Lorem ipsum dolor sit amet, habeo nostro an has. Ridens dictas noluisse ut ius, ridens vituperata vix id, ne sumo zril vocent duo',
					url: 'www.google.com',
					img: 'http://via.placeholder.com/350x150',
					backgroundColor: 'red',
					textColor: 'white'
				},
				{
					title: 'Potting Table',
					description:
						'Lorem ipsum dolor sit amet, habeo nostro an has. Ridens dictas noluisse ut ius, ridens vituperata vix id, ne sumo zril vocent duo',
					url: 'www.google.com',
					img: '',
					backgroundColor: 'violet',
					textColor: 'black'
				},
				{
					title: 'This site',
					description:
						'Lorem ipsum dolor sit amet, habeo nostro an has. Ridens dictas noluisse ut ius, ridens vituperata vix id, ne sumo zril vocent duo',
					url: 'www.google.com',
					img: '',
					backgroundColor: 'yellow',
					textColor: 'black'
				},
				{
					title: 'The internet',
					description:
						'Lorem ipsum dolor sit amet, habeo nostro an has. Ridens dictas noluisse ut ius, ridens vituperata vix id, ne sumo zril vocent duo',
					url: 'www.google.com',
					img: '',
					backgroundColor: 'green',
					textColor: 'white'
				},
				{
					title: 'The internet',
					description:
						'Lorem ipsum dolor sit amet, habeo nostro an has. Ridens dictas noluisse ut ius, ridens vituperata vix id, ne sumo zril vocent duo',
					url: 'www.google.com',
					img: '',
					backgroundColor: 'rgba(0, 0, 255, 0.1)',
					textColor: 'white'
				},
				{
					title: 'The internet',
					description:
						'Lorem ipsum dolor sit amet, habeo nostro an has. Ridens dictas noluisse ut ius, ridens vituperata vix id, ne sumo zril vocent duo',
					url: 'www.google.com',
					img: '',
					backgroundColor: 'rgba(0, 0, 255, 0.1)',
					textColor: 'white'
				},
				{
					title: 'The internet',
					description:
						'Lorem ipsum dolor sit amet, habeo nostro an has. Ridens dictas noluisse ut ius, ridens vituperata vix id, ne sumo zril vocent duo',
					url: 'www.google.com',
					img: '',
					backgroundColor: 'rgba(0, 0, 255, 0.1)',
					textColor: 'white'
				},
				{
					title: 'The internet',
					description:
						'Lorem ipsum dolor sit amet, habeo nostro an has. Ridens dictas noluisse ut ius, ridens vituperata vix id, ne sumo zril vocent duo',
					url: 'www.google.com',
					img: '',
					backgroundColor: 'rgba(0, 0, 255, 0.1)',
					textColor: 'white'
				}
			]
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

  $emerald: rgba(33, 182, 168, 1)
  $cerulean: rgba(125, 163, 172, 1)
  $chili-chocolate: rgba(127, 23, 105, 1)
  $sweet-pink: rgba(255, 203, 244, 1)
  $mexican-sand: rgba(182, 149, 33, 1)
  $harvest-white: rgba(255, 244, 203, 1)
  $colors: $emerald, $harvest-white, $sweet-pink, $mexican-sand, $cerulean, $chili-chocolate

  @mixin neon-glow
    font-family: 'Monoton', sans-serif
    text-shadow: 2px 2px 8px red, 0 0 5px white
    color: $yeller

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
  .header
    h1
      font-size: 50px
      @include neon-glow

  .content-wrapper
    .content-title, .content-description, .content-link
      font-family: 'Roboto', sans-serif
    .content-title
      text-transform: uppercase
      font-weight: 500
    .content-description
      font-weight: 300
    .content-link
      font-size: 12px

  .footer
    h1
      font-size: 50px
      @include neon-glow

  // –––––––––––––––––––––––––––
  //        General Styles
  // –––––––––––––––––––––––––––

  .header
    display: flex
    flex-direction: row
    justify-content: center
    align-items: center

  .content-wrapper
    @for $i from 1 through length($colors)
      .content-item:nth-child(#{length($colors)}n+#{$i})
        background-color: nth($colors, $i)
        display: flex
        flex-direction: column
        justify-content: space-around
        padding: 20px
        -webkit-box-shadow: 7px 7px 2px 0px rgba(29,31,33,1)
        -moz-box-shadow: 7px 7px 2px 0px rgba(29,31,33,1)
        box-shadow: 7px 7px 10px 0px rgba(29,31,33,1)
        .content-link
          background: Transparent
          cursor: pointer
          border: 2px solid black
          padding: 4px
          width: 100px
          height: 40px
          &:hover, &:focus
            color: nth($colors, $i)
            background-color: black
            outline: none
            
  .footer
    display: flex
    flex-direction: row
    align-items: center
    justify-content: center


  //–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //   Small screen layout // no grid support
  //–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //@media screen and (max-width: 499px)
  @supports not (display: grid)
    .site
      height: 100%
      width: 100%
      h1
        font-size: 35px
    .header
      height: 15%
    .content-wrapper
      display: flex
      flex-direction: column
      align-items: center
      justify-items: center
      .content-item
        width: 100%
        height: 200px
    .footer
      height: 15%

  //–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  //   Grid layout for wider screens, when browser supports grid
  //–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  @supports (display: grid)
    @media screen and (min-width: 500px)
      .site
        display: grid
        height: 100%
        width: 100%
        grid-template-columns: auto
        grid-template-rows: 10vh auto 10vh
        grid-template-areas: "header" "content" "footer"

      .header
        grid-area: header

      .content-wrapper
        margin: 40px
        grid-area: content
        display: grid
        grid-gap: 20px
        grid-template-columns: 1fr 1fr
        grid-auto-flow: row
        grid-auto-rows: minmax(150px, 20vh)

      .footer
        grid-area: footer



</style>

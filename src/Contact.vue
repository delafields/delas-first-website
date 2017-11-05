<template>
	<div class="site">

		<div class="title">
			<h1 class="page-title">CONTACT</h1>
		</div>

		<div class="content">
      <hr>
			<div v-for="social in SocialLinks" class="content-item">
				<a :href="social.url" class="social-name"><h1>{{social.name}}</h1></a>
			</div>
		</div>

		<shared-footer
		leftLinkPath="/"
		leftLinkName="HOME"
		rightLinkPath="/projects"
		rightLinkName="PROJECTS"
		>
		</shared-footer>

	</div>
</template>

<script>
import Footer from './shared/Footer.vue';

export default {
	components: {
		sharedFooter: Footer
	},
	data() {
		return {
			SocialLinks: [
				{
					name: 'Github',
					url: 'https://github.com/delafields'
				},
				{
					name: 'Twitter',
					url: 'https://twitter.com/DeLaFields'
				},
				{
					name: 'Medium',
					url: 'https://medium.com/@badatfun'
				},
				{
					name: 'Email',
					url: 'mailto:badatfun@gmail.com'
				},
				{
					name: 'Resume',
					url: ''
				}
			]
		};
	}
};
</script>

<style lang="sass" scoped>
$github-blue: #4078c0
$twitter-blue: #1da1f2
$medium-green: #00ab6c
$google-red: #dd4b39
$resume-purple: #8e43e7
$colors: $github-blue, $twitter-blue, $medium-green, $google-red, $resume-purple

@mixin center-flex
	display: flex
	justify-content: center
	align-items: center
	display: -webkit-box
	-webkit-box-align: center
	-webkit-box-pack: center
	display: -ms-flexbox
	-ms-flex-align: center
	-ms-flex-pack: center

@mixin column-flex
	flex-direction: column
	-webkit-box-orient: vertical
	-webkit-box-direction: normal
	-ms-flex-direction: column

//–––––––––––––––––––––––––––––––––-––––––––––––––––––––––––––––––––––––––––––––
//				General Styles
//–––––––––––––––––––––––––––––––––-––––––––––––––––––––––––––––––––––––––––––––
.site
	display: grid

.title
	grid-area: title
	@include center-flex

.content
	grid-area: content
	@include center-flex
	@include column-flex

.content-item
  padding: 10px 0

//–––––––––––––––––––––––––––––––––-––––––––––––––––––––––––––––––––––––––––––––
//					Large Screen Styles
//–––––––––––––––––––––––––––––––––-––––––––––––––––––––––––––––––––––––––––––––
/*			Layout			*/
.site
	grid-template-columns: 10vw 80vw 10vw
	grid-template-rows: 10vh 80vh 10vh
	grid-template-areas: ". title ." "content content content" "footer footer footer"

/*			Typography			*/
.page-title
	font-size: 40px

.social-name
	font-size: 70px
	-webkit-transition: color 0.3s ease-in-out
	transition: color 0.3s ease-in-out

@media screen and (min-width: 800px)
	.content
	  @for $i from 1 through length($colors)
	    .content-item:nth-child(#{length($colors)}n+#{$i+1})
	      .social-name:hover
	        color: lighten(nth($colors, $i), 20%)
	        cursor: pointer


//–––––––––––––––––––––––––––––––––-––––––––––––––––––––––––––––––––––––––––––––
//					Mobile & Tablet Styles
//–––––––––––––––––––––––––––––––––-––––––––––––––––––––––––––––––––––––––––––––
@media screen and (max-width: 500px)
	/*			Layout			*/
	.site
		grid-template-columns: 10vw 80vw 10vw
		grid-template-rows: 10vh 70vh 10vh 10vh
		grid-template-areas: ". title ." "content content content" "footer footer footer" ". . ."

	/*			Typography			*/
	.social-name
		font-size: 50px

@media screen and (max-width: 800px)
	.content
	  @for $i from 1 through length($colors)
	    .content-item:nth-child(#{length($colors)}n+#{$i+1})
	      .social-name
	        color: lighten(nth($colors, $i), 20%)
	        cursor: pointer


//–––––––––––––––––––––––––––––––––-––––––––––––––––––––––––––––––––––––––––––––
//					General Typography
//–––––––––––––––––––––––––––––––––-––––––––––––––––––––––––––––––––––––––––––––
.page-title, .social-name
	font-family: 'Monoton', cursive

.social-name
	text-decoration: none
	&:visited, &:active
		color: black
</style>

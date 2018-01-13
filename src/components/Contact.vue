<template>
	<div class="site">

		<shared-title pageTitle="CONTACT"></shared-title>

		<div class="content">
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
import Title from './shared/Title.vue';
import Footer from './shared/Footer.vue';

export default {
	components: {
		sharedTitle: Title,
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
//					General Styles
//–––––––––––––––––––––––––––––––––-––––––––––––––––––––––––––––––––––––––––––––
.site
	display: grid

.content
	grid-area: content
	@include center-flex
	@include column-flex

.social-name
	cursor: pointer

//–––––––––––––––––––––––––––––––––-––––––––––––––––––––––––––––––––––––––––––––
//					Typography
//–––––––––––––––––––––––––––––––––-––––––––––––––––––––––––––––––––––––––––––––
.social-name
	font-family: 'Monoton', cursive
	font-size: 20px
	text-decoration: none
	&:visited, &:active
		color: black

//–––––––––––––––––––––––––––––––––-––––––––––––––––––––––––––––––––––––––––––––
//					Large Screen Styles
//–––––––––––––––––––––––––––––––––-––––––––––––––––––––––––––––––––––––––––––––
@media screen and (min-width: 801px)
	/*			Layout/General			*/
	.site
		grid-template-columns: 10vw 80vw 10vw
		grid-template-rows: 10vh 80vh 10vh
		grid-template-areas: ". title ." "content content content" "footer footer footer"

	/*			Typography			*/
	.social-name
		-webkit-transition: color 0.3s ease-in-out
		transition: color 0.3s ease-in-out

	.content
		@each $color in $colors
			$i: index($colors, $color)
			.content-item:nth-of-type(#{$i})
				.social-name:hover
					color: lighten(nth($colors, $i), 20%)

//–––––––––––––––––––––––––––––––––-––––––––––––––––––––––––––––––––––––––––––––
//					 Tablet/Mobile Styles
//–––––––––––––––––––––––––––––––––-––––––––––––––––––––––––––––––––––––––––––––
@media screen and (max-width: 800px)
	.site
		grid-template-columns: 10vw 80vw 10vw
		grid-template-rows: 10vh 65vh 10vh 10vh
		grid-template-areas: ". title ." "content content content" "footer footer footer" ". . ."

	.content
		@each $color in $colors
			$i: index($colors, $color)
			.content-item:nth-of-type(#{$i})
				.social-name
					color: lighten(nth($colors, $i), 20%)

</style>

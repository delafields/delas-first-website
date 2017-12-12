	<template>
	<div class="site">

		<div class="title">
			<h1 class="page-title">Projects</h1>
		</div>

		<div class="content">
			<div class="content-item" v-for="project in randomList(Projects)">
				<a class="project-title" :href="project.url">{{project.title}}</a>
				<br>
				<h2 class="project-description">{{project.description}}</h2>
				<hr class="hr-style">
			</div>
		</div>

		<shared-footer
		leftLinkPath="/"
		leftLinkName="HOME"
		rightLinkPath="/contact"
		rightLinkName="CONTACT"
		>
		</shared-footer>

	</div>
</template>

<script>
import Footer from './shared/Footer.vue';
import json from './assets/projects.json';

export default {
	components: {
		sharedFooter: Footer
	},
	data() {
		return {
			Projects: json
		};
	},
	methods: {
		// Randomizes project order
		randomList: function(array) {
			let currentIndex = array.length;
			let temporaryValue;
			let randomIndex;
			let myRandomizedList;

			// Clone the original array into myRandomizedList (shallow copy of array)
			myRandomizedList = array.slice(0);

			// Randomize elements within the myRandomizedList - the shallow copy of original array
			// While there remain elements to shuffle...
			while (0 !== currentIndex) {
				// Pick a remaining element...
				randomIndex = Math.floor(Math.random() * currentIndex);
				currentIndex -= 1;

				// And swap it with the current element.
				temporaryValue = myRandomizedList[currentIndex];
				myRandomizedList[currentIndex] = myRandomizedList[randomIndex];
				myRandomizedList[randomIndex] = temporaryValue;
			}

			// Return the new array that has been randomized
			return myRandomizedList;
		}
	}
};
</script>

<style lang="sass" scoped>
$yeller: #ECE942

$shadow-red: rgba(255, 23, 68, 0.60)
$shadow-white: rgba(255, 255, 255, 0.4)

@mixin title-shadow
	text-shadow: 4px 3px 3px $shadow-red, 1px 1px 3px $shadow-white

@mixin title-transition
	transition: text-shadow .1s ease-in .1s, color 0.2s ease-in
	-webkit-transition: text-shadow .1s ease-in .1s, color 0.2s ease-in
	-o-transition: text-shadow .1s ease-in .1s, color 0.2s ease-in

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
	overflow: scroll

.project-description
		padding-bottom: 5px

.hr-style
	border-top: 1px dotted #8c8b8b
	border-bottom: 1px dotted #fff

//–––––––––––––––––––––––––––––––––-––––––––––––––––––––––––––––––––––––––––––––
//					Typography
//–––––––––––––––––––––––––––––––––-––––––––––––––––––––––––––––––––––––––––––––
.page-title, .project-title
	font-family: 'Monoton', cursive
	font-size: 40px
	text-decoration: none

.page-title
	color: black

.project-description
	font-size: 20px
	font-family: 'News Cycle', sans-serif
	color: black

//–––––––––––––––––––––––––––––––––-––––––––––––––––––––––––––––––––––––––––––––
//					Large Screen Styles
//–––––––––––––––––––––––––––––––––-––––––––––––––––––––––––––––––––––––––––––––
@media screen and (min-width: 801px)
	/*	Layout/General	*/
	.site
		grid-template-columns: 10vw 80vw 10vw
		grid-template-rows: 10vh 5vh 70vh 5vh 10vh
		grid-template-areas: ". title ." ". . ." ". content ." ". . ." "footer footer footer"

	.content-item
		width: 70%

	/*	Typography	*/
	.project-title
		color: black
		@include title-transition
		&:hover
			color: $yeller
			@include title-shadow


//–––––––––––––––––––––––––––––––––-––––––––––––––––––––––––––––––––––––––––––––
//					Tablet Styles
//–––––––––––––––––––––––––––––––––-––––––––––––––––––––––––––––––––––––––––––––
@media screen and (min-width: 501px) and (max-width: 800px)
	/*	Layout/General	*/
	.site
		grid-template-columns: 10vw 80vw 10vw
		grid-template-rows: 10vh 5vh 60vh 5vh 10vh 10vh
		grid-template-areas: ". title ." ". . ." ". content ." ". . ." "footer footer footer" ". . ."

	.content-item
		width: 70%

	/*	Typography	*/
	.project-title
		color: $yeller
		@include title-shadow

//–––––––––––––––––––––––––––––––––-––––––––––––––––––––––––––––––––––––––––––––
//					Mobile Styles
//–––––––––––––––––––––––––––––––––-––––––––––––––––––––––––––––––––––––––––––––
@media screen and (max-width: 500px)
	/*	Layout/General	*/
	.site
		grid-template-columns: 10vw 80vw 10vw
		grid-template-rows: 10vh 5vh 60vh 10vh 10vh
		grid-template-areas: ". title ." ". . ." ". content ." "footer footer footer" ". . ."

	/* Typography */
	.project-title
		color: $yeller
		@include title-shadow
</style>

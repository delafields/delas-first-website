	<template>
	<div class="site">

		<shared-title pageTitle="PROJECTS"></shared-title>

		<div class="sorter">
			<h6>Sort By: </h6>
			<a @click="projectCategory = 'both'" class="sort-button">All</a>
			<a @click="toggleCategory('code')" class="sort-button">Code</a>
			<a @click="toggleCategory('physical')" class="sort-button">Physical</a>
			<a @click="toggleCategory('python')" class="sort-button">Python</a>
			<a @click="toggleCategory('js')" class="sort-button">JS</a>
		</div>

		<div class="content">
			<div class="content-item" v-for="project in randomList(Projects)">
				<transition name="slide-fade" mode="out-in">
				<div v-if="(project.type.includes(projectCategory) === true || projectCategory === 'both')" :key="project.title">
					<a class="project-title" :href="project.url">{{project.title}}</a>
					<sharedTags class="tags-box" :tags="project.tags"></sharedTags>
					<br>
					<h2 class="project-description">{{project.description}}</h2>
					<hr class="hr-style">
				</div>
			</transition>
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
import Title from './shared/Title.vue';
import Footer from './shared/Footer.vue';
import Tags from './shared/Tags.vue';
import json from '../projects.json';

export default {
	components: {
		sharedTitle: Title,
		sharedFooter: Footer,
		sharedTags: Tags
	},
	data() {
		return {
			Projects: json,
			projectCategory: 'both'
		};
	},
	methods: {
		toggleCategory: function(category) {
			this.projectCategory === category
				? (this.projectCategory = 'both')
				: (this.projectCategory = category)
		},
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

.slide-fade-enter
	opacity: 0
	transform: translateY(10px)
.slide-fast-enter-to
	opacity: 1
.slide-fade-enter-active
	transition: all 0.5s ease 0.5s
.slide-fade-leave-to
	opacity: 0
	transform: translateY(10px)
.slide-fade-leave-active
	transition: all 0.5s ease


$yeller: #ECE942

$shadow-red: rgba(255, 23, 68, 0.60)
$shadow-white: rgba(255, 255, 255, 0.4)

@mixin title-shadow
	text-shadow: 4px 3px 3px $shadow-red, 1px 1px 3px $shadow-white

@mixin title-transition
	transition: text-shadow .1s ease-in .1s, color 0.2s ease-in
	-webkit-transition: text-shadow .1s ease-in .1s, color 0.2s ease-in
	-o-transition: text-shadow .1s ease-in .1s, color 0.2s ease-in

@mixin sorter-flex
	display: flex
	justify-content: center
	align-items: center
	display: -webkit-flex
	-webkit-box-align: center
	-webkit-box-pack: center
	display: -ms-flexbox
	-ms-flex-align: center
	-ms-flex-pack: center

@mixin content-flex
	display: -webkit-box
	display: -ms-flexbox
	display: flex
	-webkit-box-orient: vertical
	-webkit-box-direction: normal
	-ms-flex-direction: column
	flex-direction: column
	-webkit-box-align: center
	-ms-flex-align: center
	align-items: center

//–––––––––––––––––––––––––––––––––-––––––––––––––––––––––––––––––––––––––––––––
//				General Styles
//–––––––––––––––––––––––––––––––––-––––––––––––––––––––––––––––––––––––––––––––
.site
	display: grid

.content
	grid-area: content
	@include content-flex
	overflow: scroll

.project-description
	padding-bottom: 5px

.hr-style
	border-top: 1px dotted #8c8b8b
	border-bottom: 1px dotted #fff

.content-item
	position: relative

.sorter
	grid-area: sorter
	@include sorter-flex

.sort-button
	cursor: pointer
	margin: 0 10px
//–––––––––––––––––––––––––––––––––-––––––––––––––––––––––––––––––––––––––––––––
//					Typography
//–––––––––––––––––––––––––––––––––-––––––––––––––––––––––––––––––––––––––––––––
.project-title
	font-family: 'Monoton', cursive
	font-size: 40px
	text-decoration: none
	word-break: break-all

.project-description
	font-size: 20px
	font-family: 'News Cycle', sans-serif
	color: black

.sorter
	color: black
	font-size: 20px
	font-family: 'News Cycle', sans-serif

.sort-button
	color: black
	font-family: 'News Cycle', sans-serif

//–––––––––––––––––––––––––––––––––-––––––––––––––––––––––––––––––––––––––––––––
//					Large Screen Styles
//–––––––––––––––––––––––––––––––––-––––––––––––––––––––––––––––––––––––––––––––
@media screen and (min-width: 801px)
	/*	Layout/General	*/
	.site
		grid-template-columns: 10vw 80vw 10vw
		grid-template-rows: 10vh 5vh 70vh 5vh 10vh
		grid-template-areas: ". title ." ". sorter ." ". content ." ". . ." "footer footer footer"

	.content-item
		width: 70%

	.tags-box
		position: absolute
		top: 0
		right: 0
		display: flex
		display: -ms-flexbox
		// Max 5 tabs, each is 40px
		max-width: 200px
		min-width: 30px
		height: 40px

	.sort-button:hover
		text-shadow: 2px 2px 3px $shadow-red, 1px 1px 3px $shadow-white
		-webkit-transition: text-shadow .2s ease-in-out
		-o-transition: text-shadow .2s ease-in-out
		transition: text-shadow .2s ease-in-out

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
		grid-template-areas: ". title ." ". sorter ." ". content ." ". . ." "footer footer footer" ". . ."

	.content-item
		width: 70%

	.tags-box
		display: none

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
		grid-template-areas: ". title ." ". sorter ." ". content ." "footer footer footer" ". . ."

	.tags-box
		display: none

	.content-item
		width: 100%

	/* Typography */
	.project-title
		color: $yeller
		@include title-shadow
</style>

<template>
	<div class="site">

		<div class="content">
			<div class="name-wrapper">
				<h1 class="name"></h1>
				<div class="sky">
					<div class="stars"></div>
					<div class="stars1"></div>
					<div class="stars2"></div>
				</div>
			</div>
		</div>

		<shared-footer
		leftLinkPath="/projects"
		leftLinkName="PROJECTS"
		rightLinkPath="/contact"
		rightLinkName="CONTACT"
		>
	</shared-footer>

	</div>
</template>

<script>
import Footer from './shared/Footer.vue';

export default {
	components: {
		sharedFooter: Footer
	}
};
</script>

<style lang="sass" scoped>
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

@mixin background-polygon
	clip-path: polygon(50% 0%, 83% 12%, 93% 37%, 88% 81%, 68% 100%, 32% 100%, 10% 82%, 7% 37%, 17% 12%)
	-webkit-clip-path: polygon(50% 0%, 83% 12%, 93% 37%, 88% 81%, 68% 100%, 32% 100%, 10% 82%, 7% 37%, 17% 12%)

@mixin night-sky
	background: -webkit-gradient(linear, left top, left bottom, from(#020107), to(#201b46))
  background: -webkit-linear-gradient(top, #020107 0%, #201b46 100%)
  background: -o-linear-gradient(top, #020107 0%, #201b46 100%)
  background: linear-gradient(to bottom, #020107 0%, #201b46 100%)

//–––––––––––––––––––––––––––––––––-––––––––––––––––––––––––––––––––––––––––––––
//			General Styles
//–––––––––––––––––––––––––––––––––-––––––––––––––––––––––––––––––––––––––––––––
.site
	display: grid
	grid-template-columns: 100vw

.content
	grid-area: content
	@include center-flex

.name-wrapper
	@include background-polygon
	@include night-sky
	height: 45%
	@include center-flex
	text-align: center

.name
	padding: 0 40px

//–––––––––––––––––––––––––––––––––-––––––––––––––––––––––––––––––––––––––––––––
//					Typography
//–––––––––––––––––––––––––––––––––-––––––––––––––––––––––––––––––––––––––––––––
.name
	color: rgba(255, 255, 255, 0.95)
	font-family: 'News Cycle', sans-serif
	font-size: 50px
	letter-spacing: 5px

//–––––––––––––––––––––––––––––––––-––––––––––––––––––––––––––––––––––––––––––––
//					Large Screen Styles
//–––––––––––––––––––––––––––––––––-––––––––––––––––––––––––––––––––––––––––––––
@media screen and (min-width: 801px)
	.site
		grid-template-rows: 10vh 80vh 10vh
		grid-template-areas: "." "content" "footer"

	.name-wrapper
		width: 80%

	.name:before
	  content: "I BUILD THINGS"
	  -webkit-animation: nameFade 10s forwards 1
	  				animation: nameFade 10s forwards 1

//–––––––––––––––––––––––––––––––––-––––––––––––––––––––––––––––––––––––––––––––
//			Mobile/Tablet Styles
//–––––––––––––––––––––––––––––––––-––––––––––––––––––––––––––––––––––––––––––––
@media screen and (max-width: 800px)
	.site
		grid-template-rows: 75vh 10vh 10vh
		grid-template-areas: "content" "footer" "."

	.name-wrapper
		width: 90%

	.name:before
	  content: "JEREMY FIELDS"

//–––––––––––––––––––––––––––––––––-––––––––––––––––––––––––––––––––––––––––––––
//				Animations
//–––––––––––––––––––––––––––––––––-––––––––––––––––––––––––––––––––––––––––––––
/*		Title Name Fade */
@-webkit-keyframes nameFade
  0%
    content: "JEREMY FIELDS"
    color: rgba(255, 255, 255, 0.95)
  45%
    content: "JEREMY FIELDS"
    color: rgba(255, 255, 255, 0.95)
  50%
    color: rgba(255, 255, 255, 0.0)
  60%
    content: "I BUILD THINGS"
    color: rgba(255, 255, 255, 0.0)
  61%
    color: rgba(255, 255, 255, 0.0)
  70%
    color: rgba(255, 255, 255, 0.95)
  100%
    color: rgba(255, 255, 255, 0.95)

@keyframes nameFade
  0%
    content: "JEREMY FIELDS"
    color: rgba(255, 255, 255, 0.95)
  45%
    content: "JEREMY FIELDS"
    color: rgba(255, 255, 255, 0.95)
  50%
    color: rgba(255, 255, 255, 0.0)
  60%
    content: "I BUILD THINGS"
    color: rgba(255, 255, 255, 0.0)
  61%
    color: rgba(255, 255, 255, 0.0)
  70%
    color: rgba(255, 255, 255, 0.95)
  100%
    color: rgba(255, 255, 255, 0.95)

/*		Stars Animation		*/
$starFieldWidth: 2560
$starFieldHeight: 2560
$starStartOffset: 600px
$smallStarScrollDuration: 100s
$medStarScrollDuration: 125s
$largeStarScrollDuration: 175s
$numSmallStars: 1700
$numMedStars: 700
$numLargeStars: 200
$width: 100%

@function createStars($n)
  $stars: "#{random($starFieldWidth)}px #{random($starFieldHeight)}px #FFF"
  @for $i from 2 through $n
    $stars: "#{$stars} , #{random($starFieldWidth)}px #{random($starFieldHeight)}px #FFF"
  @return unquote($stars)

@mixin starTemplate($numStars, $starSize, $scrollSpeed)
  z-index: 10
  width: $starSize
  height: $starSize
  border-radius: 50%
  background: transparent
  -webkit-box-shadow: createStars($numStars)
				  box-shadow: createStars($numStars)
  -webkit-animation: scrollStars $scrollSpeed linear infinite
				  animation: scrollStars $scrollSpeed linear infinite
  &:after
    content: " "
    top: -$starStartOffset
    width: $starSize
    height: $starSize
    border-radius: 50%
    position: absolute
    background: transparent
    -webkit-box-shadow: createStars($numStars)
		    		box-shadow: createStars($numStars)

.stars
  @include starTemplate($numSmallStars, 1px, $smallStarScrollDuration)
.stars1
  @include starTemplate($numMedStars, 2px, $medStarScrollDuration)
.stars2
  @include starTemplate($numLargeStars, 3px, $largeStarScrollDuration)

@-webkit-keyframes scrollStars
  from
    transform: translateY(0px)
    -webkit-transform: translateY(0px)
    -ms-transform: translateY(0px)
  to
    transform: translateY(-#{$starFieldHeight}px) translateX(-#{$starFieldWidth}px)
    -webkit-transform: translateY(-#{$starFieldHeight}px) translateX(-#{$starFieldWidth}px)
    -ms-transform: translateY(-#{$starFieldHeight}px) translateX(-#{$starFieldWidth}px)

@keyframes scrollStars
  from
    transform: translateY(0px)
    -webkit-transform: translateY(0px)
    -ms-transform: translateY(0px)
  to
    transform: translateY(-#{$starFieldHeight}px) translateX(-#{$starFieldWidth}px)
    -webkit-transform: translateY(-#{$starFieldHeight}px) translateX(-#{$starFieldWidth}px)
    -ms-transform: translateY(-#{$starFieldHeight}px) translateX(-#{$starFieldWidth}px)
</style>

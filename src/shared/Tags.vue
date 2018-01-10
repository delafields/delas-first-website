<template>
  <div>
    <div v-for="tag in tags" class="tag-container">
      <i :class="tag" class="tag-item"></i>
    </div>
  </div>
</template>

<script>
export default {
	props: ['tags']
};
</script>

<style lang="sass" scoped>
.tag-container
  width: 100%
  display: flex
  display: -webkit-box
  display: -ms-flexbox
  justify-content: flex-end
  -webkit-box-pack: end
  -ms-flex-pack: end

.tag-item
  font-size: 40px
  padding: 0 5px
  color: black
</style>

<template>
  <div class="food-image" style="">
    <img
      class="img-fluid img-thumbnail rounded mh-100 mx-auto d-block"
      :src="image"
      alt=""
    />
    <slot name="input-file" />
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: [Object, String],
      required: true
    }
  }
}
</script>

<style scoped></style>

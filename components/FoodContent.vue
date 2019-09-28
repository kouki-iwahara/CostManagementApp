<template>
  <div>
    <div class="row">
      <div class="food-content col-sm-12">
        <div class="food-content_label">
          <span>
            <slot name="content-label" />
          </span>
          <strong class="food-content_label-value">
            <slot name="food-content" />
          </strong>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {}
}
</script>

<style scoped>
.food-content {
  padding: 0 15px;
}
.food-content_label {
  color: #495057;
  font-size: 1.25rem;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid;
}
</style>

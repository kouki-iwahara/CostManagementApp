<template>
  <div class="input-group input-group-lg">
    <div class="input-group-prepend">
      <span id="inputGroup-sizing-lg" class="input-group-text rounded-0">
        <slot />
      </span>
    </div>
    <input
      type="text"
      class="form-control rounded-0"
      placeholder=""
      aria-label="サイズの入力例"
      aria-describedby="inputGroup-sizing-lg"
    />
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.input-group-text {
  background: none;
  border: none;
  border-bottom: 1px solid;
}
input {
  border: none;
  border-bottom: 1px solid;
  border-radius: 0;
}
</style>

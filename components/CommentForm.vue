<template>
  <div class="comment-form">
    <label for="comment">コメント</label>
    <slot
      ><textarea
        id="comment"
        class="form-control"
        rows="6"
        placeholder="注意点や課題など"
      />
    </slot>
  </div>
</template>

<script>
export default {}
</script>

<style></style>

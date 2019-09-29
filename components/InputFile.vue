<template>
  <div class="input-group input-group-sm">
    <div class="content_image_file custom-file">
      <input
        id="inputGroupFile02"
        type="file"
        class="custom-file-input"
        aria-describedby="inputGroupFileAddon02"
        @input="updateValue"
      />
      <label
        class="custom-file-label"
        for="inputGroupFile02"
        data-browse="ファイルを選択"
        >ファイル選択...</label
      >
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    updateValue(e) {
      this.$emit('getFileData', e.target.files[0])
    }
  }
}
</script>

<style></style>

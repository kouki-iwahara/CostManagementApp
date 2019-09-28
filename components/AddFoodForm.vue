<template>
  <div class="row">
    <div class="register-info col-sm-12 border-bottom border-gray text-danger">
      <small>＊サイドバーから食材をクリック</small>
    </div>

    <div class="food-content col-sm-3">
      <span>食材名</span>
      <strong>表示されます</strong>
    </div>
    <div class="food-content col-sm-3">
      <div class="food-content_amount">
        <span>使用量</span>
      </div>
      <div class="input-group input-group-lg">
        <input
          type="text"
          class="form-control rounded-0"
          placeholder=""
          aria-label="サイズの入力例"
          aria-describedby="inputGroup-sizing-lg"
        />
        <div class="input-group-prepend">
          <span id="inputGroup-sizing-lg" class="input-group-text rounded-0">
            g
          </span>
        </div>
      </div>
    </div>
    <div class="food-content col-sm-3">
      <span>原価</span>
      <strong>表示されます</strong>
    </div>
    <div class="add-btn col-sm-3">
      <div class="row">
        <div class="col-sm-12">
          <button
            type="button"
            class="btn btn-outline-success btn-block btn-sm"
          >
            追加
          </button>
        </div>
        <div class="col-sm-12">
          <button
            type="button"
            class="btn btn-outline-warning btn-block btn-sm"
          >
            やめる
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.register-info {
  margin-top: 20px;
  margin-bottom: 20px;
}
.food-content {
  position: relative;
}
.food-content strong {
  display: block;
  font-size: 1.25em;
  border-bottom: 1px darkslategray solid;
  color: #a8aeb5e9;
  opacity: 0.8;
  position: absolute;
  bottom: 0;
}
.food-content_amount {
  margin-bottom: 5px;
}
.add-btn {
  /* ボタンを中央にしたい */
  padding-top: 13px;
}
</style>

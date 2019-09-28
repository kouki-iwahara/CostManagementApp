<template>
  <div class="content container-fluid">
    <div class="row offset-3">
      <div class="content_image col-sm-12">
        <food-image>
          <template slot="input-file">
            <input-file />
          </template>
        </food-image>
      </div>
      <div class="content_form col-sm-12">
        <input-lg class="content_form_input">食材名</input-lg>
        <input-lg class="content_form_input">￥価格</input-lg>
        <input-lg class="content_form_input">食材量</input-lg>
        <input-lg class="content_form_input">歩留り</input-lg>
        <food-content>
          <template slot="content-label">
            原価
          </template>
          <template slot="food-content">
            100円
          </template>
        </food-content>
      </div>
      <div class="col-sm-12">
        <comment-form />
      </div>
    </div>
    <div class="btn-form row offset-3">
      <div class="col-sm-6">
        <button type="button" class="btn btn-info btn-block btn-lg">
          登録
        </button>
      </div>
      <div class="col-sm-6">
        <button type="button" class="btn btn-danger btn-block btn-lg">
          削除
        </button>
      </div>
    </div>
  </div>
  <!-- /content -->
</template>

<script>
import FoodImage from '~/components/FoodImage.vue'
import CommentForm from '~/components/CommentForm.vue'
import inputLg from '~/components/inputLg.vue'
import FoodContent from '~/components/FoodContent.vue'
import inputFile from '~/components/inputFile.vue'

export default {
  components: {
    FoodImage,
    CommentForm,
    inputLg,
    FoodContent,
    inputFile
  }
}
</script>

<style scoped>
.content {
  padding-top: 25px;
  position: absolute;
  top: 70px;
  bottom: 0;
  right: 0;
  display: block;
  overflow-x: hidden;
  overflow-y: auto;
}
.content_image_file {
  margin: 10px 0;
}
.content_form_input {
  margin-bottom: 15px;
}
[name='amount'] {
  margin-left: 5px;
}

.persent {
  border: none;
  border-bottom: 1px solid;
}

.comment-form {
  margin: 20px 0;
}
</style>

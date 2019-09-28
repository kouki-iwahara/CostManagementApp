<template>
  <div class="content container-fluid">
    <div class="row offset-3">
      <div class="content_image col-sm-12">
        <food-image />
      </div>
      <!-- /content_image -->
      <div class="content_form col-sm-12">
        <food-content class="content_form_food-content">
          <span slot="content-label">レシピ名</span>
          <strong slot="food-content" class="food-content_label-value">
            カルボナーラ
          </strong>
        </food-content>
        <food-content class="content_form_food-content">
          <span slot="content-label">￥売価格</span>
          <strong slot="food-content" class="food-content_label-value">
            1000
          </strong>
        </food-content>
        <food-content class="content_form_food-content">
          <template slot="content-label">
            原価
          </template>
          <template slot="food-content">
            100円
          </template>
        </food-content>
        <food-content class="content_form_food-content">
          <template slot="content-label">
            原価率
          </template>
          <template slot="food-content">
            30%
          </template>
        </food-content>
        <div class="row">
          <div class="btn-form col-sm-12">
            <button type="button" class="btn btn-info btn-block btn-lg">
              変更
            </button>
          </div>
        </div>
      </div>
      <div class="content_text col-sm-12">
        <comment-form>
          <div class="content_text_box border border-dark">
            <p>
              コメントが入りますコメントが入りますコメントが入りますコメントが入りますコメントが入りますコメントが入りますコメントが入りますコメントが入りますコメントが入りますコメントが入りますコメントが入りますコメントが入りますコメントが入りますコメントが入りますコメントが入りますコメントが入ります
            </p>
          </div>
        </comment-form>
      </div>
      <!-- /content_form -->
    </div>
    <!-- row -->
    <div class="row offset-3">
      <div class="col-sm-12">
        <menu-table />
      </div>
    </div>
  </div>
  <!-- /container-fluid -->
</template>

<script>
import FoodImage from '~/components/FoodImage.vue'
import FoodContent from '~/components/FoodContent.vue'
import CommentForm from '~/components/CommentForm.vue'
import MenuTable from '~/components/MenuTable.vue'

export default {
  components: {
    FoodImage,
    FoodContent,
    CommentForm,
    MenuTable
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
.content_form_food-content {
  margin-bottom: 10px;
}
.content_form_cost {
  margin-bottom: 20px;
}
.content_form_cost strong {
  display: block;
  font-size: 1.5rem;
}

.food-add-to-menu-form {
  margin-bottom: 20px;
}
.content_form .input-group {
  padding-bottom: 20px;
}
.btn-form_checkbox {
  margin-bottom: 5px;
}
.btn-form {
  margin: 0 auto;
}
</style>

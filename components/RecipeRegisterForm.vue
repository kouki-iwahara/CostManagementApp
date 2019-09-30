<template>
  <div class="content container-fluid">
    <div class="row offset-3">
      <div class="content_image col-sm-12">
        <food-image :image="food.image">
          <template slot="input-file">
            <input-file @getFileData="getFileData" />
          </template>
        </food-image>
      </div>
      <!-- /content_image -->
      <div class="content_form col-sm-12">
        <div class="row">
          <div class="col-sm-12">
            <input-lg>
              レシピ名
            </input-lg>
            <input-lg>￥売価格</input-lg>
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
          </div>
          <div class="btn-form col-sm-12">
            <button type="button" class="btn btn-info btn-block btn-lg">
              登録
            </button>
          </div>
        </div>
      </div>
      <!-- /content_form -->
    </div>
    <!-- row -->
    <div class="row offset-3">
      <div class="plus-btn col-sm-12">
        <button
          type="button"
          class="btn btn-success rounded-circle p-0"
          style="width:2rem;height:2rem;"
        >
          ＋
        </button>
        <span>食材を登録</span>
        <nuxt-link to="/addFoodToRecipePage" class="nav-link">
          ボタン押下でここに遷移する
        </nuxt-link>
      </div>
      <div class="food-add-to-menu-form col-sm-12">
        <add-food-form />
      </div>
      <div class="col-sm-12">
        <recipe-table />
      </div>
      <div class="col-sm-12">
        <comment-form v-model="food.comment" />
      </div>
      <div class="btn-form col-sm-6">
        <button type="button" class="btn btn-danger btn-block btn-lg">
          削除
        </button>
      </div>
    </div>
  </div>
  <!-- /container-fluid -->
</template>

<script>
import FoodImage from '~/components/FoodImage.vue'
import FoodContent from '~/components/FoodContent.vue'
import AddFoodForm from '~/components/AddFoodForm.vue'
import RecipeTable from '~/components/RecipeTable.vue'
import CommentForm from '~/components/CommentForm.vue'
import InputLg from '~/components/inputLg.vue'
import inputFile from '~/components/inputFile.vue'

export default {
  components: {
    FoodImage,
    FoodContent,
    InputLg,
    CommentForm,
    AddFoodForm,
    RecipeTable,
    inputFile
  },
  data() {
    return {
      food: {
        comment: '',
        image: require('~/assets/pasta.jpg')
      },
      selectedFile: ''
    }
  },
  methods: {
    // イメージ画像データを取得し、プレビューを作成
    getFileData(fileData) {
      this.selectedFile = fileData
      // ファイルを選んでなければ初期値に戻す
      if (!this.selectedFile) {
        this.food.image = require('~/assets/pasta.jpg')
        return
      }
      // プレビューを作成
      this.previewImage(this.selectedFile)
    },
    // 画像のURLを取得しプレビューを表示する
    previewImage(selectedFile) {
      // FileReaderに対応しているか
      if (!window.FileReader) {
        alert('表示できません')
        return
      }
      const reader = new FileReader()
      reader.onload = (fileData) => {
        this.food.image = fileData.target.result
      }
      reader.readAsDataURL(selectedFile)
    }
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
  display: none;
}
.content_form .input-group {
  padding-bottom: 20px;
}

.btn-form {
  margin: 0 auto;
}

.plus-btn {
  display: block;
  margin: 20px 0;
}
@media screen and (min-width: 768px) {
  /* 謎の空白があり、offset-3のmarginを調節した */
  .plus-btn {
    display: none;
  }
  .food-add-to-menu-form {
    margin-bottom: 20px;
    display: flex;
  }
}
</style>

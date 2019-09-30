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
      <div class="content_form col-sm-12">
        <input-form
          v-model="food.name"
          placeholder="小麦粉"
          type="text"
          class="content_form_input"
        >
          <template slot="content">
            食材名
          </template>
        </input-form>
        <input-form
          v-model="food.value"
          placeholder="100"
          type="number"
          class="content_form_input"
        >
          <template slot="content">
            ￥価格
          </template>
          <div slot="input-append" class="input-group-append">
            <span id="inputGroup-sizing-lg" class="input-group-text rounded-0">
              円
            </span>
          </div>
        </input-form>
        <input-form
          v-model="food.amount"
          placeholder="100"
          type="number"
          class="content_form_input"
        >
          <div slot="input-append" class="input-group-append">
            <select
              id="validationCustom04"
              v-model="food.unit"
              style="height: 48px;"
              class="custom-select"
              required
            >
              <option selected disabled value="">単位</option>
              <option>g</option>
              <option>ml</option>
            </select>
          </div>
          <template slot="content">
            食材量
          </template>
        </input-form>
        <label for="customRange1"
          >歩留まり{{ food.yield }}<span>％</span></label
        >
        <input
          id="customRange1"
          v-model="food.yield"
          type="range"
          class="custom-range"
        />
        <food-content>
          <template slot="content-label">
            原価
          </template>
          <template slot="food-content">
            {{ foodCost }}
          </template>
        </food-content>
      </div>
      <div class="col-sm-12">
        <comment-form v-model="food.comment" />
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
import FoodContent from '~/components/FoodContent.vue'
import inputFile from '~/components/inputFile.vue'
import InputForm from '~/components/InputForm.vue'

export default {
  components: {
    FoodImage,
    CommentForm,
    FoodContent,
    inputFile,
    InputForm
  },
  data() {
    return {
      food: {
        name: '',
        value: '',
        amount: '',
        yield: 100,
        unit: '',
        comment: '',
        image: require('~/assets/pasta.jpg')
      },
      selectedFile: ''
    }
  },
  computed: {
    foodCost() {
      // 計算結果が有理数(Finite)なら表示
      if (isFinite(this.food.value / this.food.amount)) {
        // 原価計算
        let cost = this.food.value / this.food.amount
        // 原価の歩留まりを計算
        cost = (cost / 100) * this.food.yield
        // 小数点第一位を基準として四捨五入
        return Math.round(cost * 10) / 10
      }
      return '表示されます'
    }
  },
  methods: {
    // 映画のイメージ画像データを取得し、プレビューを作成
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
      reader.onload = fileData => {
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
.input-group-append select {
  margin-left: 5px;
}
</style>

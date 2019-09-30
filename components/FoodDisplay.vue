<template>
  <div class="content container-fluid">
    <div class="row offset-3">
      <div class="content_image col-sm-12">
        <food-image :image="food.image" />
      </div>
      <div class="content_form col-sm-12">
        <food-content class="content_form_food-content">
          <template slot="content-label">
            食材名
          </template>
          <template slot="food-content">
            パスタ
          </template>
        </food-content>
        <food-content class="content_form_food-content">
          <template slot="content-label">
            ￥価格
          </template>
          <template slot="food-content">
            300
          </template>
        </food-content>
        <food-content class="content_form_food-content">
          <template slot="content-label">
            食材量
          </template>
          <template slot="food-content">
            500g
          </template>
        </food-content>
        <food-content class="content_form_food-content">
          <template slot="content-label">
            歩留り
          </template>
          <template slot="food-content">
            100％
          </template>
        </food-content>
        <food-content class="content_form_food-content">
          <template slot="content-label">
            原価
          </template>
          <template slot="food-content">
            100円
          </template>
        </food-content>
      </div>
      <div class="content_text col-sm-12">
        <div class="content_text_box border border-dark">
          <p>
            コメントが入ります コメントが入ります コメントが入ります
            コメントが入ります コメントが入ります コメントが入ります
            コメントが入ります コメントが入ります コメントが入ります
            コメントが入ります コメントが入ります コメントが入ります
            コメントが入ります コメントが入ります
          </p>
        </div>
      </div>
    </div>
    <!-- /content row -->
    <div class="row offset-3">
      <slot>
        <div class="update-btn col-sm-6 ">
          <update-btn />
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
import FoodImage from '~/components/FoodImage.vue'
import FoodContent from '~/components/FoodContent.vue'
import UpdateBtn from '~/components/UpdateBtn.vue'

export default {
  components: {
    FoodImage,
    FoodContent,
    UpdateBtn
  },
  data() {
    return {
      food: {
        image: require('~/assets/pasta.jpg')
      }
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
.content_form_food-content {
  margin-bottom: 15px;
}
.content_form_cost strong {
  font-size: 1.5em;
}
.content_form_cost strong small {
  margin-left: 5px;
}

/* comment-form */
.content_text {
  margin: 20px 0;
}

.update-btn {
  margin: 30px auto;
}
</style>

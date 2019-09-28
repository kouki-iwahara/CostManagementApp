<template>
  <div class="wrapper">
    <!-- 読み込む順番でサイドバーが動かないことがある -->
    <Header />
    <food-display>
      <div class="update-btn col-sm-6 ">
        <button type="button" class="btn btn-success btn-block btn-lg">
          選択
        </button>
        <nuxt-link to="/recipeRegisterPage" class="nav-link">
          ボタン押下でここに遷移する
        </nuxt-link>
      </div>
    </food-display>
    <side-bar />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import SideBar from '~/components/SideBar.vue'
import FoodDisplay from '~/components/FoodDisplay.vue'

export default {
  components: {
    Header,
    FoodDisplay,
    SideBar
  }
}
</script>

<style></style>

<template>
  <div class="wrapper">
    <!-- 読み込む順番でサイドバーが動かないことがある -->
    <Header />
    <food-display />
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

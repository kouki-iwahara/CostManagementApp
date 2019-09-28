<template>
  <div class="wrapper">
    <Header />
    <food-register-form />
    <side-bar />
  </div>
</template>

<script>
import SideBar from '~/components/SideBar.vue'
import Header from '~/components/Header.vue'
import FoodRegisterForm from '~/components/FoodRegisterForm.vue'

export default {
  components: {
    SideBar,
    Header,
    FoodRegisterForm
  }
}
</script>

<style></style>

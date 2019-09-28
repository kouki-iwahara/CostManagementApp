<template>
  <div class="wrapper">
    <Header>
      追加する食材
    </Header>
    <recipe-register-form />
    <side-bar />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import SideBar from '~/components/SideBar.vue'
import RecipeRegisterForm from '~/components/RecipeRegisterForm.vue'

export default {
  components: {
    SideBar,
    Header,
    RecipeRegisterForm
  }
}
</script>

<style></style>

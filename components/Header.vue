<template>
  <div>
    <nav class="header fixed-top navbar navbar-expand-md navbar-dark bg-dark">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav4"
        aria-controls="navbarNav4"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <div id="navbarNav4" class="nav-list collapse navbar-collapse">
        <div class="test col-sm-3">
          <p class="nav-list_info text-dark rounded">
            <slot>
              全ての食材
            </slot>
          </p>
        </div>
        <div class="nav-list_item">
          <ul class="navbar-nav">
            <!-- アクティブつけたい -->
            <li class="nav-item">
              <nuxt-link to="/" class="nav-link active">
                食材表示
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="/foodRegisterPage" class="nav-link">
                食材登録
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="/recipeCheckPage" class="nav-link">
                メニュー表示
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="/recipeRegisterPage" class="nav-link">
                メニュー登録
              </nuxt-link>
            </li>
          </ul>
        </div>
        <!-- /nav-list_item -->
        <div class="nav-list_item_btn">
          <button class="btn btn-light" type="button">
            <nuxt-link to="/signin" class="nav-link">
              ログイン
            </nuxt-link>
          </button>
        </div>
      </div>
      <!-- /nav-list -->
    </nav>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.header {
  padding-left: 0;
  padding-right: 0;
  height: 70px;
  line-height: 70px;
}

/* nav-list */
.nav-list {
  margin: 0 auto;
  max-width: 1024px;
}
.nav-list_info {
  font-size: 20px;
  font-weight: bold;
  background-color: #f4f5f7;
  text-align: center;
  line-height: 50px;
  margin: 10px 0px;
  height: 50px;
}
.nav-list_item {
  display: flex;
  justify-content: flex-end;
}
.nav-list_item_btn {
  padding-right: 15px;
  margin: 0 0 0 auto;
}
/* /nav-list */
</style>

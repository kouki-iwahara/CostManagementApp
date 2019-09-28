<template>
  <div class="container-fluid">
    <div class="sidebar row">
      <div class="sidebar_search col-sm-3 hidden-xs  bg-dark">
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="..."
            aria-label="..."
            aria-describedby="button-addon2"
          />
          <div class="input-group-append">
            <button id="button-addon2" type="button" class="btn btn-info">
              検索
            </button>
          </div>
        </div>
      </div>
      <div class="sidebar_list col-sm-3 hidden-xs bg-dark">
        <ul
          v-for="item in foodList"
          :key="item.id"
          class="list-group list-group-flush"
        >
          <li class="food-list_item list-group-item border-bottom border-info">
            {{ item.sample }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      foodList: [],
      category: 'food'
    }
  },
  created() {
    for (let i = 1; i < 50; i++) {
      const sample = { sample: 'sampleData' }
      this.foodList.push(sample)
    }
  }
}
</script>

<style>
/* sidebar */
.sidebar_search,
.sidebar_list {
  display: none;
}
.sidebar_list ul {
  text-align: center;
}
.sidebar_list li:hover {
  cursor: pointer;
  opacity: 0.5;
  -webkit-filter: brightness(0.9);
  filter: brightness(0.9);
}

@media screen and (min-width: 768px) {
  .sidebar_search {
    display: block;
    position: absolute;
    top: 70px;
    left: 0;
  }
  .sidebar_list {
    position: absolute;
    top: 124px;
    bottom: 0;
    left: 0;
    display: block;
    overflow-x: hidden;
    overflow-y: auto;
  }
}
</style>

export const state = () => ({
  foods: []
})

export const mutations = {
  setFood(state, foods) {
    state.foods = foods.slice()
  }
}

export const getters = {
  foods(state) {
    return state.foods
  }
}

export const actions = {}

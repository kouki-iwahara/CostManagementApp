import { shallowMount } from '@vue/test-utils'
import FoodRegisterForm from '@/components/FoodRegisterForm.vue'

describe('components/FoodRegisterForm.vue', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(FoodRegisterForm)
  })
  // template
  describe('template', () => {
    test('登録ボタンがあるか', () => {
      const button = wrapper.findAll('button[type=button]').at(0)
      expect(button.text()).toBe('登録')
    })
    test('削除ボタンがあるか', () => {
      const button = wrapper.findAll('button[type=button]').at(1)
      expect(button.text()).toBe('削除')
    })
  })
  // script
  describe('script', () => {
    describe('data', () => {
      test('data構造は正しいか', () => {
        expect(wrapper.vm.$data).toHaveProperty('food.name', '')
        expect(wrapper.vm.$data).toHaveProperty('food.value', '')
        expect(wrapper.vm.$data).toHaveProperty('food.amount', '')
        expect(wrapper.vm.$data).toHaveProperty('food.yield', 100)
        expect(wrapper.vm.$data).toHaveProperty('food.unit', '')
        expect(wrapper.vm.$data).toHaveProperty('food.comment', '')
        // food.imageの検証方法がわからない
        // expect(wrapper.vm.$data).toHaveProperty('food.image', '')
      })
    })
    describe('computed', () => {
      describe('foodCost', () => {
        test('value,amountに値が無い場合 ', () => {
          wrapper.vm.food.value = ''
          wrapper.vm.food.amount = ''
          expect(wrapper.vm.foodCost).toBe('表示されます')
        })
        test('valueに値が無い場合', () => {
          wrapper.vm.food.value = ''
          wrapper.vm.food.amount = '30'
          expect(wrapper.vm.foodCost).toBe(0)
        })
        test('amountに値が無い場合', () => {
          wrapper.vm.food.value = '100'
          wrapper.vm.food.amount = ''
          expect(wrapper.vm.foodCost).toBe('表示されます')
        })
        test('value,amountに値が入った場合', () => {
          wrapper.vm.food.value = '100'
          wrapper.vm.food.amount = '30'
          expect(wrapper.vm.foodCost).toBeGreaterThanOrEqual(0)
        })
      })
    })
    describe('methods', () => {
      let filedata
      describe('getFileData', () => {
        test('fileDataに値が入っているとpreviewImage()が呼ばれる', () => {
          const stub = jest.fn()
          wrapper.setMethods({
            previewImage: stub
          })
          wrapper.vm.getFileData(filedata)
          expect(stub).not.toHaveBeenCalled()
          filedata = '~/assets/pasta.jpg'
          wrapper.vm.getFileData(filedata)
          expect(stub).toHaveBeenCalled()
        })
      })
      describe('previewImage', () => {
        // わからないのでerrorにした
        test('呼ばれるとfood.imageにURLがセットされるか', () => {
          filedata = '~/assets/pasta.jpg'
          const blob = new Blob([filedata])
          wrapper.vm.previewImage(blob)
          // Received: ""
          expect(wrapper.vm.food.image).toBeTruthy()
        })
      })
    })
  })
})

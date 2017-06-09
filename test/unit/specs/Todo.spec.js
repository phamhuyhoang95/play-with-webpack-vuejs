import Vue from 'vue'
import Hello from '@/components/todo'

describe('todo.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Hello)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.todo h1').textContent)
      .to.equal('Your Plan')
  })
})

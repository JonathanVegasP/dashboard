import AppNavHeader from '@/components/nav/AppNavHeader.vue'
import { shallowMount, type VueWrapper } from '@vue/test-utils'
import { beforeEach, describe, expect, it } from 'vitest'

describe('AppNavHeader', () => {
  let wrapper: VueWrapper

  beforeEach(() => {
    wrapper = shallowMount(AppNavHeader, {
      props: {
        title: 'title',
        subTitle: 'subTitle'
      }
    })
  })

  it('renders properly', () => {
    expect(wrapper.exists()).toBeTruthy()
    expect(wrapper.text()).toContain('title')
    expect(wrapper.text()).toContain('subTitle')
  })
})

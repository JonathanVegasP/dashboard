import AppNavSection from '@/components/nav/AppNavSection.vue'
import { shallowMount, type VueWrapper } from '@vue/test-utils'
import { beforeEach, describe, expect, it } from 'vitest'

describe('AppNavSection', () => {
  let wrapper: VueWrapper

  beforeEach(() => {
    wrapper = shallowMount(AppNavSection, {
      props: {
        title: 'title'
      }
    })
  })

  it('renders properly', () => {
    expect(wrapper.exists()).toBeTruthy()
    expect(wrapper.text()).toContain('title')
  })

  it('should expand', async () => {
    await wrapper.find('button').trigger('click')
    expect(wrapper.find('button').classes()).toContain('on-bg-active-secondary')
  })
})

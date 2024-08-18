import AppNavSectionItem from '@/components/nav/AppNavSectionItem.vue'
import { shallowMount, type VueWrapper } from '@vue/test-utils'
import { beforeEach, describe, expect, it } from 'vitest'

describe('AppNavSectionItem', () => {
  let wrapper: VueWrapper

  beforeEach(() => {
    wrapper = shallowMount(AppNavSectionItem, {
      props: {
        title: 'title'
      }
    })
  })

  it('renders properly', () => {
    expect(wrapper.text()).toContain('title')
  })
})

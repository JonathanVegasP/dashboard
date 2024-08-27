import AppCard from '@/components/card/AppCard.vue'
import { shallowMount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

describe('AppCard', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(AppCard)

    expect(wrapper.html()).toContain('<div')
  })
})

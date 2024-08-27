import TextField from '@/components/fields/TextField.vue'
import { shallowMount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

describe('TextField', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(TextField, {
      props: {
        label: 'Name'
      }
    })

    expect(wrapper.exists()).toBeTruthy()
    expect(wrapper.text()).toContain('Name')
  })
})

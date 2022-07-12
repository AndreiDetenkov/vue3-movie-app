import { describe, it, expect } from 'vitest'
import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import AppNavbarLink from './AppNavbarLink.vue'
import { web_route } from '@/utils/web-config'

describe('AppNavbarLink.vue', () => {
  it('should render nav link', async () => {
    const navItemMock = { title: 'home', url: web_route.home }
    const wrapper = shallowMount(AppNavbarLink, {
      props: {
        item: navItemMock,
      },
      global: {
        stubs: {
          RouterLink: RouterLinkStub,
        },
      },
    })

    expect(wrapper.html()).toContain(navItemMock.title)
    expect(wrapper.findComponent(RouterLinkStub).props().to).toBe(
      navItemMock.url
    )
  })
})

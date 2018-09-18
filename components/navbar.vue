<template>
  <nav class="flex flex-col md:flex-row md:items-center md:justify-between md:px-12 p-4">
    <span class="mb-4 md:mb-0">
      <nuxt-link
        :class="{
          'text-black': background === 'light',
          'text-white': background === 'dark'
        }"
        to="/"
        class="text-2xl font-bold font-serif uppercase no-underline mb-4 md:mb-0"
      >
        Clicks &amp; Mortar
      </nuxt-link>
    </span>
    <span>
      <ul class="list-reset flex">
        <li>
          <nuxt-link
            :class="{
              'text-black': background === 'light',
              'text-white': background === 'dark'
            }"
            to="/"
            class="navbar-link uppercase no-underline mr-4 md:mr-8"
          >
            Home
          </nuxt-link>
        </li>
        <li>
          <nuxt-link
            :class="{
              'text-black': background === 'light',
              'text-white': background === 'dark'
            }"
            to="/blog"
            class="navbar-link uppercase no-underline mr-4 md:mr-8"
          >
            Blog
          </nuxt-link>
        </li>
        <li>
          <nuxt-link
            :class="{
              'text-black': background === 'light',
              'text-white': background === 'dark'
            }"
            to="/about"
            class="navbar-link uppercase no-underline mr-4 md:mr-8"
          >
            About
          </nuxt-link>
        </li>
        <li>
          <a
            :class="{
              'text-black': background === 'light',
              'text-white': background === 'dark'
            }"
            onclick="Intercom('showNewMessage')"
            class="navbar-link uppercase no-underline cursor-pointer"
          >
            Contact
          </a>
        </li>
      </ul>
    </span>
  </nav>
</template>

<script>
export default {
  props: {
    background: {
      type: String,
      default: 'light'
    }
  }
}
</script>


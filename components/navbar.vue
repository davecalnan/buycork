<template>
  <nav class="flex flex-col md:flex-row md:items-center md:justify-between md:px-12 p-4">
    <span class="mb-4 md:mb-0">
      <nuxt-link
        :class="{
          'text-black': background === 'light',
          'text-white': background === 'dark'
        }"
        to="/"
        class="text-2xl font-bold uppercase no-underline mb-4 md:mb-0"
      >
        BuyCork.ie
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
            class="navbar-link uppercase no-underline mr-4 md:mr-8 link-hover"
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
            class="navbar-link uppercase no-underline mr-4 md:mr-8 link-hover"
          >
            Blog
          </nuxt-link>
        </li>
        <li>
          <a
            :class="{
              'text-black': background === 'light',
              'text-white': background === 'dark'
            }"
            href="https://davecalnan.typeform.com/to/NaZY4J"
            target="_blank"
            class="navbar-link uppercase no-underline mr-4 md:mr-8 link-hover"
          >
            Submit a Store
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


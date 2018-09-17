<template>
  <div class="sm:w-1/2 lg:w-1/3 pb-6 sm:p-2 md:p-4">
    <figure class="background-white rounded shadow-lg">
      <header>
        <img :src="store.image.url" alt="" class="rounded-t">
      </header>
      <main class="p-4">
        <p class="uppercase tracking-wide text-xs">
          <template v-for="(tag, index) in store.tags">
            {{ tag }}
            <template v-if="index !== store.tags.length - 1"> · </template>
          </template>
        </p>
        <h1 class="text-2xl font-normal my-2">{{ store.name }}</h1>
        <p class="text-indigo font-semibold text-sm">{{ store.address }}</p>
      </main>
      <footer class="bg-grey-lighter px-4 py-6">
        <button-link :href="store.website" type="primary">Visit Site</button-link>
      </footer>
    </figure>
  </div>
</template>

<script>
import buttonLink from '~/components/button-link.vue'

export default {
  components: {
    buttonLink
  },
  props: {
    store: {
      type: Object,
      default: () => { return {} },
    },
  }
}
</script>
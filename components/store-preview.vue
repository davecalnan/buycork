<template>
  <div class="sm:w-1/2 md:w-1/3 lg:w-1/4 pb-6 sm:p-2 md:p-4">
    <figure class="h-full flex flex-col background-white rounded shadow-lg">
      <header>
        <graphcms-image :image="store.image" :width="356" :height="200" class="w-full rounded-t border-b-4 border-indigo"/>
      </header>
      <main class="p-4 flex-1 flex flex-col">
        <p class="uppercase tracking-wide text-xs font-bold">
          <template v-for="(tag, index) in store.tags">
            {{ tag }}
            <template v-if="index !== store.tags.length - 1"> · </template>
          </template>
        </p>
        <h1 class="flex-1 text-2xl font-normal my-2">{{ store.name }}</h1>
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
import graphcmsImage from '~/components/graphcms-image.vue'

export default {
  components: {
    buttonLink,
    graphcmsImage
  },
  props: {
    store: {
      type: Object,
      default: () => { return {} },
    },
  }
}
</script>
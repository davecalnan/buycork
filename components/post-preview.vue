<template>
  <div>
    <figure class="bg-white rounded shadow-lg">
      <header>
        <a :href="path">
          <graphcms-image :image="post.image" :width="356" :height="200" class="w-full rounded-t border-b-4 border-red"/>
        </a>
      </header>
      <main class="p-4">
        <p class="uppercase tracking-wide text-xs font-bold text-grey-darkest">
          <a :href="category" class="text-grey-darkest no-underline">{{ post.category }}</a> | {{ post.readingTime }} min read
        </p>
        <a :href="path" class="block text-2xl text-black no-underline my-2 font-serif">{{ post.title }}</a>
        <p class="mt-4 mb-2 font-serif text-grey-darkest">
          {{ post.body | truncate(115, '...') }}
        </p>
        <nuxt-link :to="path" class="text-sm italic text-black p-2 -mx-2 rounded hover:bg-grey-lighter w-auto inline-block">
          Read more &rarr;
        </nuxt-link>
      </main>
    </figure>
  </div>
</template>

<script>
import graphcmsImage from '~/components/graphcms-image.vue'

export default {
  components: {
    graphcmsImage
  },
  props: {
    post: {
      type: Object,
      default: () => { return {} }
    }
  },
  computed: {
    path() {
      return '/blog/' + this.post.slug
    },
    category() {
      return '/blog/category/' + this.post.category.toLowerCase()
    }
  }
}
</script>

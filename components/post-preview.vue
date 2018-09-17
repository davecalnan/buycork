<template>
  <div class="w-80 md:w-96 px-4 md:px-6 flex-no-shrink">
    <figure class="bg-white rounded shadow-lg">
      <img :src="post.image.url" alt="" class="rounded-t border-b-4 border-indigo">
      <main class="p-4">
        <p class="uppercase tracking-wide text-xs">{{ post.category }} | {{ post.readingTime }} min read</p>
        <h1 class="text-2xl font-normal my-2">{{ post.title }}</h1>
        <p class="mt-4 mb-2">
          {{ post.body | truncate(115, '...') }}
        </p>
        <nuxt-link :to="/blog/ + post.slug" class="text-sm italic text-black p-2 -mx-2 rounded hover:bg-grey-lighter w-auto inline-block">
          Read more &rarr;
        </nuxt-link>
      </main>
    </figure>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      default: () => { return {} }
    }
  }
}
</script>

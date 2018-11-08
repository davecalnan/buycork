<template>
  <main>
    <a :href="path">
      <img :src="image">
    </a>
    <hero-box :link="path" class="relative z-10 rounded-t md:-mt-32 bottom-border-on-hover">
      <p class="uppercase tracking-wide text-xs font-bold pt-2 text-grey-darkest">
        <a :href="category" class="text-grey-darkest no-underline">{{ post.category }}</a> | {{ post.readingTime }} min read
      </p>
      <nuxt-link :to="path" class="block my-2 text-xl md:text-5xl text-black font-bold no-underline font-serif">
        {{ post.title }}
      </nuxt-link>
      <p class="my-2 sm:text-xl text-grey-darkest font-serif">
        {{ post.body | truncate(200, '...') }}
      </p>
      <nuxt-link :to="path" class="text-sm sm:text-base italic text-black p-2 -mx-2 rounded hover:bg-grey-lighter w-auto inline-block">
        Read more &rarr;
      </nuxt-link>
    </hero-box>
    <section class="px-4 py-8 md:px-8">
      <div class="min-h-full sm:flex flex-wrap items-stretch">
        <post-preview v-for="post in posts" :key="post" :post="post" class="sm:w-1/2 md:w-1/3 lg:w-1/4 pb-6 sm:p-2 md:p-4"/>
      </div>
    </section>
  </main>
</template>

<script>
import allPosts from '~/apollo/queries/allPosts.gql'

import hero from '~/components/hero.vue'
import heroBox from '~/components/hero-box.vue'
import navbar from '~/components/navbar.vue'
import postPreview from '~/components/post-preview.vue'

export default {
  components: {
    hero,
    heroBox,
    navbar,
    postPreview
  },
  data () {
    return {
      post: {
        title: null,
        slug: null,
        readingTime: null,
        category: null,
        image: {
          handle: null
        }
      }
    }
  },
  computed: {
    category() {
      return '/blog/category/' + this.post.category.toLowerCase()
    },
    image() {
      return 'https://media.graphcms.com/resize=w:1920,h:720,f:crop/compress/' + this.post.image.handle
    },
    path() {
      return '/blog/' + this.post.slug
    }
  },
  apollo: {
    posts: {
      prefetch: true,
      query: allPosts
    }
  },
  created () {
    this.post = this.posts.shift()
  },
}
</script>

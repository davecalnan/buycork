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
      <div class="sm:flex flex-wrap items-stretch">
        <post-preview v-for="post in posts" :key="post" :post="post" class="sm:w-1/2 md:w-1/3 pb-6 sm:p-2 md:p-4"/>
        <div v-if="posts.length < 3" class="sm:w-1/2 md:w-1/3 pb-6 sm:p-2 md:p-4">
          <figure class="bg-grey-lightest rounded shadow-lg h-full flex flex-col justify-center items-center p-4 text-center">
            <h1 :href="path" class="block text-xl font-normal no-underline mb-2">No more posts to show.</h1>
            <nuxt-link to="/blog" class="text-sm italic text-black p-2 -mx-2 rounded hover:bg-grey-lighter w-auto inline-block">
              Back to the blog homepage &rarr;
            </nuxt-link>
          </figure>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import posts from '~/apollo/queries/posts.gql'

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
  data() {
    return {
      post: {
        title: null,
        slug: null,
        body: null,
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
      query: posts,
      prefetch: ({ route }) => ({ slug: route.params.slug.replace(/^\w/, c => c.toUpperCase()) }),
      variables() {
        return { slug: this.$route.params.slug.replace(/^\w/, c => c.toUpperCase()) }
      }
    }
  },
  created() {
    this.post = this.posts.shift()
  },
  head() {
    return {
      title: `${this.$route.params.slug.replace(/^\w/, c => c.toUpperCase())} Blog | BuyCork.ie`,
      meta: [
        { hid: 'description', name: 'description', content: `Read about ${this.$route.params.slug} on the BuyCork.ie blog.` },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: `https://buycork.ie/blog/${this.$route.params.slug}` },
        { property: 'og:title', content: `${this.$route.params.slug.replace(/^\w/, c => c.toUpperCase())} Blog | BuyCork.ie` },
        { property: 'og:description', content: `Read about ${this.$route.params.slug} on the BuyCork.ie blog.` },
        { property: 'og:image', content: 'https://media.graphcms.com/resize=w:1968,h:932,f:crop/compress/TxAEoeATmWVPZeQguMtN' },
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:url', content: `https://buycork.ie/blog/${this.$route.params.slug}` },
        { property: 'twitter:title', content: `${this.$route.params.slug.replace(/^\w/, c => c.toUpperCase())} Blog | BuyCork.ie` },
        { property: 'twitter:description', content: `Read about ${this.$route.params.slug} on the BuyCork.ie blog.` },
        { property: 'twitter:image', content: 'https://media.graphcms.com/resize=w:1968,h:932,f:crop/compress/TxAEoeATmWVPZeQguMtN' }
      ]
    }
  }
}
</script>

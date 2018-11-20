<template>
  <main>
    <header class="text-center mx-4 my-10">
      <p class="uppercase tracking-wide text-xs font-bold mb-2 text-grey-darkest">
        <a :href="category" class="text-grey-darkest no-underline">{{ post.category }}</a> | {{ post.readingTime }} min read
      </p>
      <h1 class="block text-2xl md:text-5xl font-serif no-underline">
        {{ post.title }}
      </h1>
    </header>
    <img :src="image">
    <vue-markdown :source="post.body" class="article py-8"/>
  </main>
</template>

<script>
import post from '~/apollo/queries/post.gql'

import hero from '~/components/hero.vue'
import heroBox from '~/components/hero-box.vue'
import navbar from '~/components/navbar.vue'
import VueMarkdown from 'vue-markdown'

export default {
  components: {
    hero,
    heroBox,
    navbar,
    VueMarkdown
  },
  data () {
    return {
      post: {
        title: null,
        slug: null,
        body: null,
        readingTime: null,
        category: 'Category',
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
      return 'https://media.graphcms.com/resize=w:1968,h:932,f:crop/compress/' + this.post.image.handle
    },
    path() {
      return '/blog/' + this.post.slug
    }
  },
  apollo: {
    post: {
      query: post,
      prefetch: ({ route }) => ({ slug: route.params.slug }),
      variables() {
        return { slug: this.$route.params.slug }
      }
    }
  },
  head() {
    return {
      title: `${this.post.title} | BuyCork.ie`
    }
  },
  head() {
    return {
      title: `${this.post.title} | BuyCork.ie`,
      meta: [
        { hid: 'description', name: 'description', content: 'Support independent businesses by finding local alternatives to chains and bigger brands. Buy Local. Buy Cork.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: `https://buycork.ie/blog/${this.$route.params.slug}` },
        { property: 'og:title', content: `${this.post.title} | BuyCork.ie` },
        { property: 'og:description', content: 'Support independent businesses by finding local alternatives to chains and bigger brands. Buy Local. Buy Cork.' },
        { property: 'og:image', content: this.image },
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:url', content: `https://buycork.ie/blog/${this.$route.params.slug}` },
        { property: 'twitter:title', content: `${this.post.title} | BuyCork.ie` },
        { property: 'twitter:description', content: 'Support independent businesses by finding local alternatives to chains and bigger brands. Buy Local. Buy Cork.' },
        { property: 'twitter:image', content: this.image }
      ]
    }
  }
}
</script>

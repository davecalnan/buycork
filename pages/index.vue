<template>
  <main>
    <hero
      title="Buy Local. Buy Cork."
      bg-image="https://media.graphcms.com/resize=w:1920,h:640,f:crop/compress/3t4yux3ISOCBOGnNfy1n"
    />
    <ais-index :search-store="searchStore" :query-parameters="{'page': page}" app-id="U7KOSDU8H5" api-key="14c5cd17da47c022078992567c75b658" index-name="prod_stores">
      <section class="p-4">
        <hero-box class="shadow-lg rounded">
          <h1 for="search" class="md:mt-4 mb-4 md:mb-6 text-2xl md:text-3xl font-normal">
            Find local alternatives to chains and bigger brands.
          </h1>
          <div class="flex shadow-md mb-4 md:mb-8">
            <ais-input type="text" name="search" placeholder="I'm looking for..." class="min-w-0 bg-grey-light rounded-l flex-grow p-2 md:p-3 lg:p-4" @keyup="console.log(page)"/>
            <button type="button" class="inline-block bg-red text-white text-bold uppercase tracking-wide p-2 md:p-3 lg:p-4 rounded-r">Search</button>
          </div>
        </hero-box>
      </section>
      <section class="px-4 py-8 md:px-8">
        <ais-results :results-per-page="4" :stack="true" class="sm:flex flex-wrap items-stretch">
          <template slot-scope="{ result }">
            <store-preview :store="result"/>
          </template>
        </ais-results>
        <div class="w-full flex flex-col md:flex-row justify-center items-center">
          <!-- <ais-pagination :padding="5"/> -->
          <button-link type="standard" class="my-4 mx-auto md:ml-0 md:mr-4 lift-on-hover" @click.native="loadMore()">Load more stores</button-link>
          <button-link href="https://davecalnan.typeform.com/to/NaZY4J" type="primary" class="mx-auto md:mx-0 mb-4 md:mb-0 lift-on-hover">Submit a Store</button-link>
        </div>
      </section>
    </ais-index>
    <section class="bg-grey-light">
      <div class="md:pt-24 md:pr-8 pb-0 md:pl-24 flex flex-column">
        <svg class="h-96 flex-no-shrink text-grey-darker fill-current hidden md:inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M16 2h4v15a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V0h16v2zm0 2v13a1 1 0 0 0 1 1 1 1 0 0 0 1-1V4h-2zM2 2v15a1 1 0 0 0 1 1h11.17a2.98 2.98 0 0 1-.17-1V2H2zm2 8h8v2H4v-2zm0 4h8v2H4v-2zM4 4h8v4H4V4z"/></svg>
        <div class="pt-8 px-8 md:p-0 md:pt-12 md:pl-12 md:w-144">
          <div class="flex items-center mb-4">
            <svg class="md:hidden h-24 mr-4 flex-no-shrink text-grey-darker fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M16 2h4v15a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V0h16v2zm0 2v13a1 1 0 0 0 1 1 1 1 0 0 0 1-1V4h-2zM2 2v15a1 1 0 0 0 1 1h11.17a2.98 2.98 0 0 1-.17-1V2H2zm2 8h8v2H4v-2zm0 4h8v2H4v-2zM4 4h8v4H4V4z"/></svg>
            <nuxt-link to="/blog" class="font-serif text-black text-4xl no-underline">Our <br class="inline md:hidden">Blog &rarr;</nuxt-link>
          </div>
          <p class="text-black text-xl my-4">
            Independent businesses need your support now more than ever. We'll be sharing how and why to support them along with sharing their stories.
          </p>
          <button-link href="/blog" type="standard" nuxt>Visit the blog</button-link>
        </div>
      </div>
      <scroll-container>
        <post-preview v-for="post in posts" :key="post.id" :post="post" class="w-80 md:w-96 px-4 md:px-6 flex-no-shrink"/>
      </scroll-container>
    </section>
    <!-- <section class="bg-grey-darker text-white">
      <div class="p-8 md:pt-24 md:pr-12 md:pb-12 md:pl-24 flex flex-column">
        <svg class="hidden md:block h-96 flex-no-shrink fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M3 6c0-1.1.9-2 2-2h8l4-4h2v16h-2l-4-4H5a2 2 0 0 1-2-2H1V6h2zm8 9v5H8l-1.67-5H5v-2h8v2h-2z"/></svg>
        <div class="md:pt-12 md:pl-12 md:w-144">
          <div class="flex items-center mb-4">
            <svg class="md:hidden h-24 mr-4 flex-no-shrink fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M3 6c0-1.1.9-2 2-2h8l4-4h2v16h-2l-4-4H5a2 2 0 0 1-2-2H1V6h2zm8 9v5H8l-1.67-5H5v-2h8v2h-2z"/></svg>
            <h1 class="font-serif text-4xl">Our <br class="inline md:hidden">Mission<span class="hidden xs:inline"> &rarr;</span></h1>
          </div>
          <div class="text-grey-lightest text-xl my-4">
            <p class="mb-4">
              Irish businesses are being outperformed online.
            </p>
            <p>
              We are determined to empower Irish businesses with the knowledge, tools, and help to succeed.
            </p>
          </div>
          <button-link href="/about" type="standard" nuxt>Why we do it</button-link>
        </div>
      </div>
    </section> -->
  </main>
</template>

<script>
import allPosts from '~/apollo/queries/allPosts.gql'

import buttonLink from '~/components/button-link.vue'
import heroBox from '~/components/hero-box.vue'
import hero from '~/components/hero.vue'
import postPreview from '~/components/post-preview.vue'
import scrollContainer from '~/components/scroll-container.vue'
import storePreview from '~/components/store-preview.vue'

import { createFromAlgoliaCredentials, createFromSerialized } from 'vue-instantsearch'
const searchStore = createFromAlgoliaCredentials('L5CYV7NHZW', '3544b7f1069c8b34593fb10c9b1f6188')
searchStore.indexName = 'prod_stores'

export default {
  layout: 'hero',
  components: {
    buttonLink,
    hero,
    heroBox,
    postPreview,
    scrollContainer,
    storePreview
  },
  async asyncData() {
    searchStore.start()
    searchStore.refresh()
    await searchStore.waitUntilInSync()

    return { serializedSearchStore: searchStore.serialize() }
  },
  data() {
    return {
      page: 1,
      searchStore: null
    }
  },
  watch: {
    'searchStore.query'(newQuery, oldQuery) {
      this.page = 1
    }
  },
  created() {
    this.searchStore = createFromSerialized(this.serializedSearchStore)
  },
  apollo: {
    posts: {
      prefetch: true,
      query: allPosts
    }
  },
  methods: {
    loadMore() {
      return this.page++
    }
  },
  head() {
    return {
      title: 'Find local alternatives | BuyCork.ie',
      meta: [
        { hid: 'description', name: 'description', content: 'Support independent businesses by finding local alternatives to chains and bigger brands. Buy Local. Buy Cork.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://buycork.ie' },
        { property: 'og:title', content: 'Find local alternatives | BuyCork.ie' },
        { property: 'og:description', content: 'Support independent businesses by finding local alternatives to chains and bigger brands. Buy Local. Buy Cork.' },
        { property: 'og:image', content: 'https://buycork.ie/img/cork-city.jpg' },
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:url', content: 'https://buycork.ie' },
        { property: 'twitter:title', content: 'Find local alternatives | BuyCork.ie' },
        { property: 'twitter:description', content: 'Support independent businesses by finding local alternatives to chains and bigger brands. Buy Local. Buy Cork.' },
        { property: 'twitter:image', content: 'https://buycork.ie/img/cork-city.jpg' }
      ]
    }
  }
}
</script>

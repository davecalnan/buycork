<template>
  <main>
    <hero
      title="Buy Local. Buy Cork."
      bg-image="https://media.graphcms.com/resize=w:1920,h:640,f:crop/compress/WwLPXQIxRwqe7gAhYN2w"
    />
    <ais-index :search-store="searchStore" :query-parameters="queryParameters" app-id="U7KOSDU8H5" api-key="14c5cd17da47c022078992567c75b658" index-name="prod_stores">
      <section class="p-4">
        <hero-box class="shadow-lg rounded">
          <h1 for="search" class="mt-2 md:mt-4 mb-4 md:mb-6 text-2xl md:text-3xl font-normal">
            Find local alternatives to {{ alternative }}.
          </h1>
          <div class="flex shadow-md mb-4 md:mb-8">
            <ais-input type="text" name="search" placeholder="" class="min-w-0 bg-grey-light rounded-l flex-grow p-2 md:p-3 lg:p-4"/>
            <button type="button" class="inline-block bg-red text-white text-bold uppercase tracking-wide p-2 md:p-3 lg:p-4 rounded-r">Search</button>
          </div>
        </hero-box>
      </section>
      <section class="px-4 py-8 md:px-8">
        <ais-results class="sm:flex flex-wrap items-stretch">
          <template slot-scope="{ result }">
            <store-preview :store="result"/>
          </template>
        </ais-results>
        <!-- <div class="w-full flex">
          <button-link type="standard" class="my-4 mx-auto lift-on-hover">Load more stores</button-link>
        </div> -->
      </section>
    </ais-index>
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
    // searchStore.refresh()
    // await searchStore.waitUntilInSync()

    return { serializedSearchStore: searchStore.serialize() }
  },
  data() {
    return {
      searchStore: null,
      queryParameters: {
        facetFilters: `alternativeTo.name:${this.$route.params.slug}`
      }
    }
  },
  computed: {
    alternative() {
      return this.$route.params.slug.charAt(0).toUpperCase() + this.$route.params.slug.slice(1)
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
  head() {
    return {
      title: `Local ${this.alternative} alternatives | BuyCork.ie`
    }
  }
}
</script>

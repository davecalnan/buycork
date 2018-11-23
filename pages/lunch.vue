<template>
  <main>
    <hero
      bg-image="https://media.graphcms.com/resize=w:1920,h:640,f:crop/compress/6Mxcu1JShSu0ppdhFwjR"
      title="Cork's best lunch spots."
    />
    <ais-index :search-store="searchStore" :query-parameters="queryParameters" app-id="U7KOSDU8H5" api-key="14c5cd17da47c022078992567c75b658" index-name="prod_stores">
      <section class="p-4">
        <hero-box class="shadow-lg rounded">
          <h1 for="search" class="mt-2 md:mt-4 mb-4 md:mb-6 text-2xl md:text-3xl font-normal">
            Find your new favouite local lunch.
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
        facetFilters: 'tags:lunch'
      }
    }
  },
  created() {
    this.searchStore = createFromSerialized(this.serializedSearchStore)
  },
  head() {
    return {
      title: 'Best local lunch spots | BuyCork.ie',
      meta: [
        { hid: 'description', name: 'description', content: '100% Local. 100% Indepenent. 100% Cork. Find your new favourite spot for lunch on BuyCork.ie.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://buycork.ie/lunch' },
        { property: 'og:title', content: 'Best local lunch spots | BuyCork.ie' },
        { property: 'og:description', content: '100% Local. 100% Indepenent. 100% Cork. Find your new favourite spot for lunch on BuyCork.ie.' },
        { property: 'og:image', content: 'https://buycork.ie/img/lunch.jpg' },
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:url', content: 'https://buycork.ie/lunch' },
        { property: 'twitter:title', content: 'Best local lunch spots | BuyCork.ie' },
        { property: 'twitter:description', content: '100% Local. 100% Indepenent. 100% Cork. Find your new favourite spot for lunch on BuyCork.ie.' },
        { property: 'twitter:image', content: 'https://buycork.ie/img/lunch.jpg' }
      ]
    }
  }
}
</script>

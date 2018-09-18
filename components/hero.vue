<template>
  <header :style="'background-image: url(' + bgImage + ')'" class="min-h-screen-40 bg-blue py-4 bg-cover bg-center bg-black-50 bg-multiply">
    <navbar background="dark"/>
    <h1
      v-if="title"
      class="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-white mx-auto md:mx-32 lg:w-screen-60 mt-12 mb-24 md:mt-24 md:mb-32"
    >
      {{ title }}
    </h1>
  </header>
</template>

<script>
import navbar from '~/components/navbar.vue'

export default {
  components: {
    navbar
  },
  props: {
    bgImage: {
      type: String,
      default: 'https://media.graphcms.com/resize=w:1920,h:640,f:crop/compress/3t4yux3ISOCBOGnNfy1n'
    },
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

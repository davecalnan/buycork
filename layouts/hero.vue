<template>
  <main class="border-t-4 border-red">
    <nuxt/>
    <about-3xw/>
    <foot/>
  </main>
</template>

<style>

</style>

<script>
import about3xw from '~/components/about-3xw.vue'
import foot from '~/components/foot.vue'

export default {
  components: {
    about3xw,
    foot
  }
}
</script>

<template>
  <main>
    <navbar class="bg-black" background="dark"/>
    <nuxt/>
    <about-3xw/>
    <foot/>
  </main>
</template>

<style>

</style>

<script>
import navbar from '~/components/navbar.vue'
import about3xw from '~/components/about-3xw.vue'
import foot from '~/components/foot.vue'

export default {
  components: {
    navbar,
    about3xw,
    foot
  }
}
</script>

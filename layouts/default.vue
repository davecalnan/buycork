<template>
  <main>
    <navbar/>
    <nuxt/>
    <foot/>
  </main>
</template>

<style>

</style>

<script>
import navbar from '~/components/navbar.vue'
import foot from '~/components/foot.vue'

export default {
  components: {
    navbar,
    foot
  }
}
</script>

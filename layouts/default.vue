<template>
  <main>
    <navbar class="bg-indigo" background="dark"/>
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

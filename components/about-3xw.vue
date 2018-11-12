<template>
  <section class="bg-white text-grey-darker">
    <div class="p-8 md:pt-24 md:pr-12 md:pb-12 md:pl-24 flex flex-column">
      <svg class="hidden md:block h-96 flex-no-shrink fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V0L8.11 5.87 3 12h4v8L17 8h-4z"/></svg>
      <div class="md:ml-12 md:mt-12 md:w-144">
        <div class="flex items-center mb-4">
          <svg class="md:hidden h-24 flex-no-shrink fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V0L8.11 5.87 3 12h4v8L17 8h-4z"/></svg>
          <h1 class="font-serif text-grey-darkest text-4xl">About <br class="inline md:hidden">3xW &rarr;</h1>
        </div>
        <div class="text-xl text-grey-dark my-4">
          <p class="mb-4">
            3xW Digital helps small businesses get more done.
          </p>
          <p>
            Nobody starts a business because they want to deal with admin. We automate processes so businesses can focus on what they do best.
          </p>
        </div>
        <button-link href="https://3xw.ie" type="standard">Visit site</button-link>
        <!-- <no-ssr>
          <button-link type="standard" class="ml-2 -mt-2" launches-intercom-message>Get in touch</button-link>
        </no-ssr> -->
      </div>
    </div>
  </section>
</template>

<script>
import buttonLink from '~/components/button-link.vue'

export default {
  components: {
    buttonLink
  }
}
</script>

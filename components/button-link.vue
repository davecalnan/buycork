<template>
  <nuxt-link
    v-if="nuxt"
    :to="href"
    :class="{
      'bg-white text-black': type === 'standard',
      'bg-red text-white': type === 'primary'
    }"
    class="inline-block w-auto uppercase no-underline tracking-wide p-2 rounded shadow-md"
  >
    <slot/>
  </nuxt-link>
  <a
    v-else-if="href"
    :href="href"
    :class="{
      'bg-white text-black': type === 'standard',
      'bg-red text-white': type === 'primary'
    }"
    class="inline-block w-auto uppercase no-underline tracking-wide p-2 rounded shadow-md"
  >
    <slot/>
  </a>
  <button
    v-else-if="!href"
    :class="{
      'bg-white text-black': type === 'standard',
      'bg-red text-white': type === 'primary'
    }"
    class="uppercase no-underline tracking-wide p-2 rounded shadow-md"
    @click="launchIntercomMessage()"
  >
    <slot/>
  </button>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      default: ''
    },
    launchesIntercomMessage: {
      type: Boolean,
      default: false
    },
    nuxt: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'standard',
      required: true
    }
  },
  methods: {
    launchIntercomMessage: function() {
      if (this.launchesIntercomMessage) {
        Intercom('showNewMessage')
      }
    }
  }
}
</script>


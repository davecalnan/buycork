<template>
  <span>
    <main
      ref="scrollable"
      class="relative py-8 md:-mt-40 lg:-mt-40 md:pl-64 w-screen flex overflow-x-scroll no-scrollbar" style="-webkit-overflow-scrolling: touch;"
    >
      <slot/>
    </main>
    <footer class="flex justify-center pb-8">
      <scroll-button
        :disabled="scroll === 0"
        direction="left"
        @click.native="scrollLeft()"
      />
      <scroll-button
        :disabled="scroll === scrollableLength"
        direction="right"
        class="ml-4"
        @click.native="scrollRight()"
      />
    </footer>
  </span>
</template>

<script>
import scrollButton from '~/components/scroll-button.vue'

import ease from 'easy-ease';

export default {
  components: {
    scrollButton
  },
  data () {
    return {
      scroll: 0,
      scrollableLength: 0
    }
  },
  mounted () {
    this.$refs.scrollable.addEventListener('scroll', this.handleScroll);
    this.scrollableLength = this.$refs.scrollable.scrollWidth - this.$refs.scrollable.clientWidth
  },
  beforeDestroy () {
    this.$refs.scrollable.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll: function () {
      this.scroll = this.$refs.scrollable.scrollLeft
    },
    scrollLeft: function () {
      ease({
        startValue: 0,
        endValue: 42,
        onStep: value => this.$refs.scrollable.scrollBy({ left: -value }),
      });
    },
    scrollRight: function () {
      ease({
        startValue: 0,
        endValue: 42,
        onStep: value => this.$refs.scrollable.scrollBy({ left: value }),
      });
    }
  }
}
</script>

<template>
  <button
    :class="{ 'text-red-lightest': disabled }"
    class="bg-white shadow-md text-red text-2xl rounded-full p-2 h-12 focus:outline-none focus:shadow-outline"
  >
    <svg v-if="direction === 'left'" class="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7.05 9.293L6.343 10 12 15.657l1.414-1.414L9.172 10l4.242-4.243L12 4.343z"/></svg>
    <svg v-if="direction === 'right'" class="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
  </button>
</template>

<script>
export default {
  props: {
    direction: {
      type: String,
      default: 'right'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

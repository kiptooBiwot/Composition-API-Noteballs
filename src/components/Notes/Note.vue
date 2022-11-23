<script setup>
/**
 * imports
 */
import { computed } from 'vue'

/**
 * Props
 */
const props = defineProps({
  note: {
    type: Object,
    required: true
  }
})

/**
 * Computed
 */

const characterLength = computed(() => {
  let length = props.note.content.length
  const chars = length > 1 ? 'characters' : 'character'
  return length + ' ' + chars
  // return answer
})

</script>

<template>
  <div class="card mb-4">
    <div class="card-content">
      <div class="content">
        {{ note.content }}
      </div>
      <div class="has-text-right has-text-grey-light mt-2">
        <small>{{ characterLength }}</small>
      </div>
    </div>
    <footer class="card-footer">
      <a href="#" class="card-footer-item">Edit</a>
      <a href="#" class="card-footer-item">Delete</a>
    </footer>
  </div>
</template>

<style lang="scss" scoped>

</style>
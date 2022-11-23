<script setup>
/**
 * Imports
 */

import { ref } from 'vue';
import Note from '@/components/Notes/Note.vue'


/**
 * Notes
 */
const newNote = ref('')
const newNoteRef = ref(null)
const notes = ref([
  {
    id: 1,
    content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, saepe? Magnam ea quam magni sapiente debitis, minus in iste autem nihil a.Recusandae mollitia in reprehenderit excepturi, modi ex odio.'
  }
])

/**
 * Methods
 */

const addNote = () => {
  const currentDate = new Date().getTime()
  const id = currentDate.toString()

  let note = {
    id,
    content: newNote.value
  }

  // Add a new note to the top of the array
  notes.value.unshift(note)

  newNote.value = ''

  newNoteRef.value.focus()
}

</script>


<template>
  <div class="notes">
    <div class="card has-background-success-dark p-4 mb-5">
      <div class="field">
        <div class="control">
          <textarea v-model="newNote" class="textarea" placeholder="Add a new note" ref="newNoteRef" />
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button @click="addNote" class="button is-link has-background-success" :disabled="!newNote">
            Add New Note
          </button>
        </div>
      </div>
    </div>

    <!-- CARDS -->
    <Note v-for="note in notes" :key="note.id" :note="note" />

  </div>
</template>


<style scoped>

</style>
<script setup>
/**
 * Imports
 */

import { ref } from 'vue';
import Note from '@/components/Notes/Note.vue'
import { useStoreNotes } from '@/store/storeNote'

/**
 * Store(State Data)
 */
const storeNotes = useStoreNotes()

/**
 * Notes
 */
const newNote = ref('')
const newNoteRef = ref(null)

/**
 * Methods
 */

const addNote = () => {

  storeNotes.addNote(newNote.value)
  newNote.value = ''
  newNoteRef.value.focus()
}


/***
 * Delete note [filter]
 */
const deleteNote = (idToDelete) => {
  storeNotes.deleteNote(idToDelete)
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
    <Note v-for="note in storeNotes.notes" :key="note.id" :note="note" />

  </div>
</template>


<style scoped>

</style>
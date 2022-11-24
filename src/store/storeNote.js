import { defineStore } from 'pinia'

export const useStoreNotes = defineStore('storeNotes', {
  state: () => {
    return {
      notes: [
        {
          id: 1,
          content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, saepe? Magnam ea quam magni sapiente debitis, minus in iste autem nihil a.Recusandae mollitia in reprehenderit excepturi, modi ex odio.'
        },
        {
          id: 2,
          content: 'This a second note. It is a short version of the notes object.'
        }
      ]
    }
  },
  actions: {
    addNote(newNote) {
      const currentDate = new Date().getTime()
      const id = currentDate.toString()

      let note = {
        id,
        content: newNote
      }

      // Add note to the start of the array exact opposite of push
      this.notes.unshift(note)
    },

    deleteNote(idToDelete) {
      console.log('This is the deleted button clicked' + idToDelete);
      this.notes = this.notes.filter(note => note.id !== idToDelete)
    }
  }
})

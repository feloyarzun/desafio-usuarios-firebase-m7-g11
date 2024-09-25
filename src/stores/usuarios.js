import { $db } from '@/firebaseApp'
import { collection, onSnapshot, addDoc, deleteDoc, doc } from 'firebase/firestore'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUsuariosStore = defineStore('usuarios', () => {
  const usuarios = ref([])

  async function fetchUsuarios() {
    try {
      const usuariosRef = collection($db, 'usuarios')

      onSnapshot(usuariosRef, (snapshot) => {
        usuarios.value = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      })
    } catch (error) {
      console.error(error)
    }
  }

  async function addUsuario(data) {
    try {
      const usuarioRef = collection($db, 'usuarios')
      await addDoc(usuarioRef, { nombre: data.nombre, correo: data.correo })
    } catch (error) {
      console.error(error)
    }
  }

  async function deleteUsuario(id) {
    try {
      const usuarioRef = doc($db, 'usuarios', id)

      await deleteDoc(usuarioRef)
    } catch (error) {
      console.error(error)
    }
  }

  return {
    usuarios,
    fetchUsuarios,
    addUsuario,
    deleteUsuario
  }
})

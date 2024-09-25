<script setup>
import { ref } from 'vue'
import { useUsuariosStore } from '@/stores/usuarios'

const nombreUsuario = ref('')
const correoUsuario = ref('')
const usuariosStore = useUsuariosStore()

function handleAddUsuario() {
  if (nombreUsuario.value && correoUsuario.value) {
    usuariosStore.addUsuario({ nombre: nombreUsuario.value, correo: correoUsuario.value })
    nombreUsuario.value = ''
    correoUsuario.value = ''
  }
}
</script>

<template>
  <h1 class="text-center">Añadir Usuarios</h1>
  <form @submit.prevent="handleAddUsuario" class="mb-4 p-4 bg-dark text-white rounded">
    <div class="mb-3">
      <label for="nombre" class="form-label">Nombre</label>
      <input
        required
        type="text"
        class="form-control bg-white text-dark"
        id="nombre"
        v-model="nombreUsuario"
        placeholder="Ingresa el nombre"
      />
    </div>
    <div class="mb-3">
      <label for="correo" class="form-label">Correo</label>
      <input
        required
        type="email"
        class="form-control bg-white text-dark"
        id="correo"
        v-model="correoUsuario"
        placeholder="Ingresa el correo"
      />
    </div>
    <button type="submit" class="btn btn-primary">Agregar</button>
  </form>
</template>

<style scoped></style>

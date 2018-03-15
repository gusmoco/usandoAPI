<template>
  <div>
    <p>Clique para fotografar</p>
    <img src=
         @click="fotografa()">
    <img :src="foto">
  </div>
</template>

<script>
export default {
  name: 'Aula04',
  data () {
    return {
      foto: ''
    }
  },
  methods: {
    fotografa() {
      return this.foto ='../assets/eu.jpg'
    }
  }
}
</script>
<style scoped>
  

</style>

<template>
  <section class="fundo">
    <ul class="lista">
      <li v-for="resposta in respostas">
        <p><strong>{{resposta.name}}</strong></p>
        <p>{{resposta.email}}</p>
      </li>
    </ul>
  </section>
  
</template>
<script>
import axios from 'axios'

export default {
  name: 'UsandoAPI',
  data () {
    return {
      respostas: [],
    }
  },
  created() {
    axios.get(`http://jsonplaceholder.typicode.com/users`)
    .then(response => {
      this.respostas = response.data
    })
  }
}

</script>
<style scoped>
	.fundo{
		width: 100%;
		min-height: 100vh;
		margin: 0;		
		padding: 0;
		background: url(http://rockntech.com.br/wp-content/uploads/2014/06/gifs-eventos-incriveis-natureza_10.gif) no-repeat top left;
		background-size: cover;
	}
	.lista{
		min-height: 100vh;
		background: rgba(225,225,225,0.7);
		display: inline-table;
	

	}
</style>
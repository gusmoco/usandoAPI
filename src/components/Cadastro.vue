<template>
    <div>
		<label>nome</label>
   		<input v-model="students.name" type="text">
    	<label>idade</label>
    	<input v-model="students.age" type="text">
    	<label>e-mail</label>
    	<input v-model="students.email" type="text">

		<button @click type="button">Submit</button>
	</div>
</template>
<script>
export default{
	name:'Cadastro',
	data(){
		return{
			students:[
				{
					name:'',
					age:'',
					email:''
				}
			]
		}
	}
}

</script>
<style>
	
</style>
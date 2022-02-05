<template>
<div>
<h1>sister</h1>
<p>{{sis.message}}</p>
</div>
</template>

<script>
import store from "../store.js"
	export default{
		data(){
			return{
				sis:store.state
			}
		}
	}
</script>

<style>
</style>

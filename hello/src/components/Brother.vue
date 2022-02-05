<template>
<div>
	<h1>brother <button @click="changeData">改变数据</button></h1>
	<p>{{bro.message}}</p>
</div>
</template>

<script>
import store from "../store.js"
	export default{
	data(){
		return{
			bro:store.state
		}
	},
	methods:{
		changeData(){
			store.setStateMessage("brother data")
		}
	}
}
</script>

<style>
</style>

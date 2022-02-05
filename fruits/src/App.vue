<template>
  <div id="app">
	<h1>水果</h1>
	<form @submit.prevent="postData">
		<input type="text" v-model="fruit">
		<button>添加</button>
	</form>
	<ul>
		<li v-for="(item,index) of fruitList" :key="index">
			{{item}}
		<button @click="del(index)">删除</button>
		<!-- 删除是根据索引删的 -->
		</li>
	</ul>
  </div>
</template>

<script>
import axios from "axios";
//前端获取后台的数据用axios来获取
// v-for"(item,index) of fruitList" :key="index"
export default {
	data(){
		return{
			fruit:"",
			fruitList:[],
		}
	}, 
	created(){
		this.getFruitList();	//初始化数据
	},
methods:{
	//获取数据
	getFruitList(){
		axios.get("http://localhost:3000/fruits").then(res =>{
			this.fruitList = res.data
		})	
		//因为是跨域，所以要写完整的路径名
		//axios通过完整路径名访问到服务器，也就是发送访问请求
		//然后再用then获取数据
	},
	//添加数据
	postData(){
		axios.post("http://localhost:3000/fruits",{
			fruit: this.fruit
		}).then(res=>{		// eslint-disable-line no-unused-vars

			this.getFruitList();
		})
	},
	//删除数据
	del(index){	// eslint-disable-line no-unused-vars
		axios.delete(`http://localhost:3000/fruits/${index}`)	//这里的参数是模板字符串``而不是''
		.then(res=>{		// eslint-disable-line no-unused-vars
			this.getFruitList();
		})
	} 
}
}
</script>

<style>

</style>

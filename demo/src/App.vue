<template>
<div id="app">
<form @submit.prevent="postData">
	<div>
		<lable>用户名：</lable>
		<input type="text" v-model="formData.username">
	</div>
	<div>
		<lable>密码：</lable>
		<input type="password" v-model="formData.pwd">
	</div>
	<div>
		<label for="">爱好：</label>
		<select v-model="formData.hby">
			<option value="football">足球</option>
			<option value="basketball">篮球</option>
		</select>
	</div>
	<div>
		<lable>性别：</lable>
		<label for="">男</label>
		<input type="radio" value="男" v-model="formData.sex">
		<label for="">女</label>
		<input type="radio" value="女" v-model="formData.sex">
	</div>
	<div>
		<label for="">技能：</label>
		<label for="">前端</label>
		<input type="checkbox" value="前端" v-model="formData.skill">
		<label for="">Java：</label>
		<input type="checkbox" value="Java" v-model="formData.skill">
	</div>
	<button>提交表单</button>
</form>


</div>
</template>

<script>

export default{

	data(){
		return{
			formData: {
				username:"",
				pwd:"",
				hby:"",
				sex:"",
				skill:[]
			}
		}
	},
	methods:{
		postData(){
			console.log(this.formData)
		}
	}

}
</script>

<style>
/* div{
	width: 300px;
	height: 100px;
	background-color: red;
} */
</style>

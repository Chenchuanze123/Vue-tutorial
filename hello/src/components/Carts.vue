<template>
    <div>
     <h1>购物车</h1>
      <ul>
		<li v-for="(v,i) of cars" :key="i">
			{{v.name}} 单价：{{v.price}} 
			<Counter 
			:qu="v.qu"
			:index="i"
			@sub="sub"
			@add="add"

			></Counter>
		</li>
      </ul>  
    </div>
</template>

<script>
import Counter from "./Counter.vue"
export default {
	components:{Counter},
	data(){
		return{
			qu:0,
			cars:[
				{name:"兰博基尼",price:10000,qu:0},
				{name:"宝马",price:2000,qu:0},
				{name:"奔驰",price:4000,qu:0},
				{name:"特斯拉",price:5000,qu:0},
			]
		}
	},
	methods:{
		sub(index){
			if(this.cars[index].qu==0){
				alert("数量不可为0哦！")
			}
			else{
				this.cars[index].qu--;
			}
			
		},
		add(index){
			this.cars[index].qu++;
		}
	}
}
</script>

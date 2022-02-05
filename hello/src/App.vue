<template>
  <div>
	<Control></Control>
	<Carts></Carts>

	<Brother></Brother>
	<Sister></Sister>
  </div>
</template>

<script>
import Carts from "./components/Carts"
import Control from "./components/Control"

import Brother from "./components/Brother"
import Sister from "./components/Sister"

export default {
	components:{Carts,Brother, Sister,Control},
	data(){
		return{
			msg:""
		}
	}
};
</script>

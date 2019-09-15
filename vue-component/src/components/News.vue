<template>
    <div>
        <h2>我是新闻组件</h2>
        <ul>
            
            <li v-for="item in list">
               <router-link :to="'/content?id='+item.sid"> {{item.name}}</router-link>
            </li>
        </ul>
    </div>
</template>  
<script>
export default{
        data(){
            return{
                list:[]
            }
        },
        methods:{
           
            requestData: function(){ 
                var api = "https://api.apiopen.top/getJoke?page=1&count=10&type=text";
                this.$http.get(api).then(response =>{
                    this.list = response.body.result;
                }, err => {
                    console.log(err);
                })

            }
            
            
        },          
        mounted(){
            this.requestData();

        }
}
</script>
<style lang="scss">


</style>
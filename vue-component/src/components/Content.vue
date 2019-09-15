<template>
    <div>
        <h2>新闻详情</h2>
        <ul>
            <li v-for="(item, key) in listContent">
                {{key}} : {{item}}
            </li>
        </ul>
    </div> 
    
</template>
<script>


export default{
    data(){
        return{
            listContent:[]
        }
    },
    methods:{
            requestData: function(param){ 
                var api = "https://api.apiopen.top/getSingleJoke?sid="+param;
                this.$http.get(api).then(response =>{
                   this.listContent = response.body.result;
                },err=>{
                    console.log(err)
                })

            }
       },
       mounted(){
           //get传值
            var param = this.$route.query.id; //获取动态路由传值
           this.requestData(param);
}
}
</script>
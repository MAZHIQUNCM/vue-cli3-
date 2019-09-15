<!--所有的内容要用根节点包含起来-->
<template>
    <div>
        <h2>我是一个Home组件儿~~</h2>
        <ul>
            <li v-for="(item, key) in list">
                 <router-link :to="'/pcontent?id='+ key">{{item}}</router-link>  
            </li>
        </ul>
    </div> 
    
</template>

<script>


export default{
    data(){
        return{
            list: ["商品1","商品2","商品3"]
        }
    }
}
</script>
<style lang="scss" scoped>
h2{
    color: red
}
</style>
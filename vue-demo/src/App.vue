<template>
  <div id="app">
    <input type="text" v-model="todo" @keydown="add($event)">
    <br>
    <hr>
  <h2>进行中</h2>
    <ul>
      <li v-for="(item, key) in lists" v-if="!item.checked">
        <input type="checkbox" v-model="item.checked"  @change="saveList()"> ---- {{item.title}} ---- <button v-on:click="del(key)">删除</button>
      </li>
    </ul>
  <h2>已完成</h2>
    <ul>
      <li v-for="(item, key) in lists" v-if="item.checked">
        <input type="checkbox" v-model="item.checked" @change="saveList()"> ---- {{item.title}} ---- <button v-on:click="del(key)">删除</button>
      </li>
    </ul>
  </div>
</template>

<script>
import storage from './model/storage.js'

export default {//把组件暴露出去
  data(){
    return {
      todo: '',
        lists: [
          // {
          //   title:"看釜山行",
          //   checked: true
          // },
          //  {
          //   title:"打代码",
          //   checked: false
          // }
        ]
    }
  },
  methods:{
    //获取文本框里的值放到list数组中去
    add: function(e){
        if(e.keyCode == 13){
            this.lists.push({
            title: this.todo,
            checked: false
          })
          this.todo = ''
        }
        storage.set('list', this.lists);   
        
    },
    del: function(key){
        this.lists.splice(key);
        storage.set('list', this.lists);
        /*or # this.lists.pop(key);*/
    },
    saveList: function(){
      storage.set('list', this.lists);
    }

  },
  mounted(){
   var list = JSON.parse(localStorage.getItem('list'));
    if(list)
      this.lists = list;
   
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

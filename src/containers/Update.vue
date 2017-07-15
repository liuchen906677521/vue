<template>
  <div>
    <m-header title="添加页面"></m-header>
    <div class="add">
      <div class="group">
        <label for="bookName">书名</label>
        <input type="text" id="bookName" placeholder="请输入书名" v-model="book.bookName">
      </div>
      <div class="group">
        <label for="bookName">书的地址</label>
        <input type="text" id="bookCover" placeholder="请输入书的封面" v-model="book.bookCover">
      </div>
      <div class="group">
        <label for="content">书的详情</label>
        <input type="text" id="content" placeholder="请输入书的详细内容" v-model="book.content">
      </div>
      <div class="group">
        <button @click="Update">修改图书</button>
        <router-link to="/list" tag="button">返回</router-link>
      </div>
    </div>
  </div>
</template>
<script>
  import MHeader from 'components/MHeader';
  import {getOneBook,updateBook} from 'api';
  export default {
    data(){
      return {
        book:{
          bookName:'',
          bookCover:'',
          content:''
        }
      }
    },
    created(){
      getOneBook(this.$route.params.id).then(res=>{
          this.book=res.data;//将数据挂载视图上
      });
    },
    computed: {},
    components: {MHeader},
    methods: {
        getBook(){
          getOneBook(this.$route.params.id).then(res=>{
            this.book=res.data;//将数据挂载视图上
          });
        },
      Update(){//修改图书
        //1，告诉服务器端 需要改哪一本书 书的id
        //2，告诉更改的内容
        updateBook(this.$route.params.id,this.book).then(()=>{
            this.$router.push('/list')
        });

      }
    },
    activated(){//如果keep-alive执行 依然会调用activated方法
        this.getBook();
    }
  }
</script>
<style scoped lang="less">
  .add{
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    .group{
      label{
        font-size: 16px;
        line-height: 25px;
      }
      input{
        border: 1px solid #ccc;
        height: 30px;
      }
      margin-bottom: 10px;
      display: flex;
      flex-direction: column;
      button{
        height: 35px;
      }
    }
  }
</style>

<template>
    <div>
      <MHeader title="收藏"></MHeader>
      <ul class="collect-list">
        <li v-for="col in collect">
          <img :src="col.bookCover" alt="">
          <a @click="cancel(col.id)">取消收藏</a>
        </li>
      </ul>
    </div>
</template>
<script>
  import {mapState,mapMutations} from 'vuex';
  import MHeader from 'components/MHeader';
  import * as Types from '../store/mutation-types'
    export default {
        data(){
            return {}
        },
        computed: {
          ...mapState(['collect'])
        },
        components: {MHeader},
        methods: {
          ...mapMutations([Types.REMOVE_COLLECT]),
            cancel(id){
                this[Types.REMOVE_COLLECT](id);
            }
        }
    }
</script>
<style scoped lang="less">
.collect-list{

  margin: 10px;
  li{
    img{
      width: 120px;
      height: 120px;
      align-items: center;
    }
    a{
      color: #00ccff;
      padding-left: 20px;
      padding-top: 80px;
    }
    display: flex;
    flex-direction: row;
  }
}
</style>

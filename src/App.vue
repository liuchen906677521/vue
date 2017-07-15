<template>
    <div>
      <!--保持缓存 缓存页面-->
      <div class="content">
        <keep-alive>
          <transition name="trans">
            <router-view></router-view>
          </transition>

        </keep-alive>
      </div>
      <tab></tab>
    </div>
</template>
<script>
import Tab from 'components/Tab'
export default {
  components:{
    Tab
  }
}
</script>
<style scoped>
/*每个组件都保管着 自己的样式 与其他人无关*/
  .content{
    margin-bottom: 65px;
  }
.view{
  position: absolute;
  width: 100%;
  top:0;
  left: 0;
  bottom: 65px;
}
  .trans-enter{
    transform: translate(100%);
  }
  .trans-enter-active{
    transition: 0.2s linear;
  }
  .trans-leave-avtive{
    transition: 0.2s linear;
    transform: translate(-100%);

  }
</style>

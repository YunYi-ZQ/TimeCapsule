<template>
  <view class="write-page">
    <text>这是"去写"页面</text>
    
    <!-- 自定义底部导航栏 -->
    <view class="custom-tabbar">
      <view class="tabbar-item" :class="{ active: currentTab === 0 }" @click="switchTab(0)">
        <image src="/static/tabbar/home.svg" class="tabbar-icon" v-if="currentTab === 0" />
        <image src="/static/tabbar/home-default.svg" class="tabbar-icon" v-else />
        <text class="tabbar-text">首页</text>
      </view>
      <view class="tabbar-item" :class="{ active: currentTab === 1 }" @click="switchTab(1)">
        <image src="/static/tabbar/write.svg" class="tabbar-icon" v-if="currentTab === 1" />
        <image src="/static/tabbar/write-default.svg" class="tabbar-icon" v-else />
        <text class="tabbar-text">去写</text>
      </view>
      <view class="tabbar-item" :class="{ active: currentTab === 2 }" @click="switchTab(2)">
        <image src="/static/tabbar/mine.svg" class="tabbar-icon" v-if="currentTab === 2" />
        <image src="/static/tabbar/mine-default.svg" class="tabbar-icon" v-else />
        <text class="tabbar-text">我的</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "Write",
  data() {
    return {
      currentTab: 1, // 当前选中的标签页 (去写页面)
    };
  },
  methods: {
    // 切换底部导航
    switchTab(index) {
      this.currentTab = index; // 更新当前选中的标签页
      switch (index) {
        case 0:
          uni.switchTab({ url: "/pages/index/index" });
          break;
        case 1:
          // 去写页面（当前页，无需跳转）
          break;
        case 2:
          uni.switchTab({ url: "/pages/mine/mine" });
          break;
      }
    },
  },
}
</script>

<style scoped>
.write-page {
  padding: 20rpx;
  width: 100%;
  min-height: 100vh;
  background-color: #f5f5f5;
  box-sizing: border-box;
  padding-bottom: 100rpx; /* 给底部导航栏留空间 */
}
</style>
<template>
  <view class="mine-page">
    <!-- 用户信息区域 -->
    <view class="user-info-section">
      <view class="avatar-wrapper">
        <image :src="userInfo.avatar || '/static/default-avatar.svg'" class="avatar" />
      </view>
      <view class="user-info">
        <text class="username">{{ userInfo.username || '未登录' }}</text>
        <button v-if="!userInfo.username" class="login-btn" @click="login">立即登录</button>
      </view>
    </view>

    <!-- 页面导航栏 -->
    <view class="nav-section">
      <view class="nav-item" @click="goToPersonalInfo">
        <view class="nav-left">
          <image src="/static/nav/user.svg" class="nav-icon" />
          <text class="nav-title">个人信息</text>
        </view>
        <image src="/static/nav/arrow.svg" class="nav-arrow" />
      </view>
      <view class="nav-item" @click="goToMyCapsule">
        <view class="nav-left">
          <image src="/static/nav/capsule.svg" class="nav-icon" />
          <text class="nav-title">我的胶囊</text>
        </view>
        <image src="/static/nav/arrow.svg" class="nav-arrow" />
      </view>
      <view class="nav-item" @click="goToSettings">
        <view class="nav-left">
          <image src="/static/nav/settings.svg" class="nav-icon" />
          <text class="nav-title">设置</text>
        </view>
        <image src="/static/nav/arrow.svg" class="nav-arrow" />
      </view>
    </view>
    
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
  name: "Mine",
  data() {
    return {
      currentTab: 2, // 当前选中的标签页 (我的页面)
      userInfo: {
        username: '',
        avatar: ''
      }
    };
  },
  onShow() {
    // 页面显示时获取用户信息
    this.getUserInfo();
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
          uni.switchTab({ url: "/pages/write/write" });
          break;
        case 2:
          // 我的页面（当前页，无需跳转）
          break;
      }
    },
    // 获取用户信息
    getUserInfo() {
      // 这里可以通过uni.getUserInfo或本地存储获取用户信息
      const userInfo = uni.getStorageSync('userInfo');
      if (userInfo) {
        this.userInfo = userInfo;
      }
    },
    // 登录
    login() {
      // 这里可以调用登录接口或uni.login
      uni.showToast({
        title: '登录功能开发中',
        icon: 'none'
      });
    },
    // 跳转到个人信息页面
    goToPersonalInfo() {
      if (!this.userInfo.username) {
        this.login();
        return;
      }
      uni.navigateTo({
        url: '/pages/personal-info/personal-info'
      });
    },
    // 跳转到我的胶囊页面
    goToMyCapsule() {
      if (!this.userInfo.username) {
        this.login();
        return;
      }
      uni.navigateTo({
        url: '/pages/my-capsule/my-capsule'
      });
    },
    // 跳转到设置页面
    goToSettings() {
      uni.navigateTo({
        url: '/pages/settings/settings'
      });
    }
  }
};
</script>

<style scoped>
.mine-page {
  width: 100%;
  min-height: 100vh;
  background-color: #f5f5f5;
  padding-bottom: 100rpx; /* 给底部导航栏留空间 */
}

/* 用户信息区域 */
.user-info-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60rpx 20rpx;
  background-color: #fff;
  margin-bottom: 20rpx;
}

.avatar-wrapper {
  margin-bottom: 20rpx;
}

.avatar {
  width: 160rpx;
  height: 160rpx;
  border-radius: 50%;
  border: 4rpx solid #007aff;
}

.user-info {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.username {
  font-size: 36rpx;
  font-weight: bold;
  color: #333;
  margin-bottom: 16rpx;
}

.login-btn {
  width: 160rpx;
  height: 50rpx;
  line-height: 50rpx;
  font-size: 26rpx;
  color: #007aff;
  background-color: transparent;
  border: 2rpx solid #007aff;
  border-radius: 25rpx;
  padding: 0;
  margin: 0;
}
</style>
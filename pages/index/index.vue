<template>
  <view class="index-page">
    <!-- 1. 轮播Banner -->
    <swiper class="banner-swiper" autoplay circular indicator-dots indicator-color="#fff" indicator-active-color="#007aff">
      <swiper-item v-for="(item, index) in bannerList" :key="index">
        <image :src="item.image" class="banner-img" mode="widthFix"></image>
      </swiper-item>
    </swiper>

    <!-- 2. 胶囊功能板块 -->
    <view class="capsule-section">
      <view class="capsule-item" @click="goToCreateCapsule">
        <image src="/static/images/create-capsule.png" class="capsule-icon" mode="widthFix"></image>
        <text class="capsule-text">创建胶囊</text>
      </view>
      <view class="capsule-item" @click="goToMyCapsule">
        <image src="/static/images/my-capsule.png" class="capsule-icon" mode="widthFix"></image>
        <text class="capsule-text">我的胶囊</text>
      </view>
    </view>

    <!-- 3. 推文列表 -->
    <view class="tweet-section">
      <view class="tweet-item" v-for="(item, index) in tweetList" :key="index" @click="goToTweetDetail(item.id)">
        <image :src="item.cover" class="tweet-cover" mode="widthFix"></image>
        <view class="tweet-content">
          <text class="tweet-title">{{ item.title }}</text>
          <text class="tweet-desc">{{ item.desc }}</text>
          <text class="tweet-time">{{ item.time }}</text>
        </view>
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
  name: 'Index',
  data() {
    return {
      currentTab: 0, // 当前选中的标签页
      // banner轮播图数据
      bannerList: [
        { image: '/static/images/banner1.jpg' },
        { image: '/static/images/banner2.jpg' },
        { image: '/static/images/banner3.jpg' }
      ],
      // 推文列表数据
      tweetList: [
        {
          id: 1,
          cover: '/static/images/tweet1.png',
          title: '胶囊的使用小技巧，新手必看',
          desc: '分享几个实用的胶囊创建和管理技巧，让你的使用体验翻倍',
          time: '2025-12-30'
        },
        {
          id: 2,
          cover: '/static/images/tweet2.png',
          title: '如何创建专属你的个性化胶囊',
          desc: '从模板选择到内容填充，一步步教你打造独一无二的胶囊',
          time: '2025-12-29'
        },
        {
          id: 3,
          cover: '/static/images/tweet3.png',
          title: '我的胶囊收藏夹整理攻略',
          desc: '教你分类管理胶囊，再也不用担心找不到重要内容',
          time: '2025-12-28'
        }
      ]
    };
  },
  methods: {
    // 切换底部导航
    switchTab(index) {
      this.currentTab = index; // 更新当前选中的标签页
      if (index === 1) {
        uni.switchTab({ url: '/pages/write/write' });
      } else if (index === 2) {
        uni.switchTab({ url: '/pages/mine/mine' });
      }
      // index === 0 时，已经在首页，无需跳转
    },
    // 跳转到创建胶囊页面
    goToCreateCapsule() {
      uni.switchTab({ url: '/pages/write/write' });
    },
    // 跳转到我的胶囊页面
    goToMyCapsule() {
      uni.switchTab({ url: '/pages/mine/mine' });
    },
    // 跳转到推文详情页
    goToTweetDetail(id) {
      uni.showToast({
        title: '推文详情页开发中',
        icon: 'none'
      });
    }
  }
};
</script>

<style scoped>
.index-page {
  width: 100%;
  min-height: 100vh;
  background-color: #f5f5f5;
  box-sizing: border-box;
  padding-bottom: 100rpx; /* 给底部导航栏留空间 */
}

/* banner轮播图样式 */
.banner-swiper {
  width: 100%;
  height: 300rpx;
}

.banner-img {
  width: 100%;
  height: 100%;
}

/* 胶囊功能板块样式 */
.capsule-section {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 30rpx 0;
  background-color: #fff;
  margin: 20rpx 0;
}

.capsule-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.capsule-icon {
  width: 100rpx;
  height: 100rpx;
  margin-bottom: 10rpx;
}

.capsule-text {
  font-size: 28rpx;
  color: #333;
}

/* 推文列表样式 */
.tweet-section {
  width: 100%;
  padding: 0 20rpx;
  box-sizing: border-box;
}

.tweet-item {
  display: flex;
  background-color: #fff;
  border-radius: 16rpx;
  padding: 20rpx;
  margin-bottom: 20rpx;
}

.tweet-cover {
  width: 150rpx;
  height: 150rpx;
  border-radius: 8rpx;
  margin-right: 20rpx;
}

.tweet-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.tweet-title {
  font-size: 32rpx;
  font-weight: bold;
  color: #333;
  margin-bottom: 10rpx;
}

.tweet-desc {
  font-size: 26rpx;
  color: #666;
  line-height: 1.4;
  margin-bottom: 10rpx;
}

.tweet-time {
  font-size: 24rpx;
  color: #999;
}
</style>
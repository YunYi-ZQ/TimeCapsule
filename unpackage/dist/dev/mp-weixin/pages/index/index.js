"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  name: "Index",
  data() {
    return {
      // banner轮播图数据
      bannerList: [
        { image: "/static/images/banner1.png" },
        { image: "/static/images/banner2.png" },
        { image: "/static/images/banner3.png" }
      ],
      // 推文列表数据
      tweetList: [
        {
          id: 1,
          cover: "/static/images/tweet1.png",
          title: "胶囊的使用小技巧，新手必看",
          desc: "分享几个实用的胶囊创建和管理技巧，让你的使用体验翻倍",
          time: "2025-12-30"
        },
        {
          id: 2,
          cover: "/static/images/tweet2.png",
          title: "如何创建专属你的个性化胶囊",
          desc: "从模板选择到内容填充，一步步教你打造独一无二的胶囊",
          time: "2025-12-29"
        },
        {
          id: 3,
          cover: "/static/images/tweet3.png",
          title: "我的胶囊收藏夹整理攻略",
          desc: "教你分类管理胶囊，再也不用担心找不到重要内容",
          time: "2025-12-28"
        }
      ]
    };
  },
  methods: {
    // 切换底部导航
    switchTab(e) {
      const index = e.index;
      switch (index) {
        case 0:
          break;
        case 1:
          common_vendor.index.switchTab({ url: "/pages/write/write" });
          break;
        case 2:
          common_vendor.index.switchTab({ url: "/pages/mine/mine" });
          break;
      }
    },
    // 跳转到创建胶囊页面
    goToCreateCapsule() {
      common_vendor.index.navigateTo({ url: "/pages/create-capsule/create-capsule" });
    },
    // 跳转到我的胶囊页面
    goToMyCapsule() {
      common_vendor.index.navigateTo({ url: "/pages/my-capsule/my-capsule" });
    },
    // 跳转到推文详情页
    goToTweetDetail(id) {
      common_vendor.index.navigateTo({ url: `/pages/tweet-detail/tweet-detail?id=${id}` });
    }
  }
};
if (!Array) {
  const _component_uni_tabbar_item = common_vendor.resolveComponent("uni-tabbar-item");
  const _component_uni_tabbar = common_vendor.resolveComponent("uni-tabbar");
  (_component_uni_tabbar_item + _component_uni_tabbar)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.bannerList, (item, index, i0) => {
      return {
        a: item.image,
        b: index
      };
    }),
    b: common_assets._imports_0,
    c: common_vendor.o((...args) => $options.goToCreateCapsule && $options.goToCreateCapsule(...args)),
    d: common_assets._imports_1,
    e: common_vendor.o((...args) => $options.goToMyCapsule && $options.goToMyCapsule(...args)),
    f: common_vendor.f($data.tweetList, (item, index, i0) => {
      return {
        a: item.cover,
        b: common_vendor.t(item.title),
        c: common_vendor.t(item.desc),
        d: common_vendor.t(item.time),
        e: index,
        f: common_vendor.o(($event) => $options.goToTweetDetail(item.id), index)
      };
    }),
    g: common_vendor.p({
      icon: "home",
      text: "首页"
    }),
    h: common_vendor.p({
      icon: "edit-pen",
      text: "去写"
    }),
    i: common_vendor.p({
      icon: "person",
      text: "我的"
    }),
    j: common_vendor.o($options.switchTab),
    k: common_vendor.p({
      current: 0
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1cf27b2a"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map

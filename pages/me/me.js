// 获取小程序实例
var app = getApp()
var page = {
  data:{
    userInfo: {}
  },
  onLoad:function(options){
    var that = this;
    // 调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      that.setData({
        userInfo: userInfo
      })
    })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },

  yjjy: function() {
    wx.showModal({
      title: '意见与建议',
      content: '意见与建议发送到 mywxapp@126.com',
      confirmText: "我知道了",
      showCancel: false,
      success: function(res) {
        if (res.confirm) {
          console.log('用户点击确定')
        }
      }
    })
  },
  // 跳转到关于程序页面
  aboutApp: function() {
    wx.navigateTo({
        url: "aboutApp/aboutApp"
      })
  },
  // 跳转到关于作者页面
  aboutMe: function() {
    wx.navigateTo({
        url: "aboutMe/aboutMe"
      })
  }
}
Page(page)
var page = {
  data:{
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
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
  // 天气的查询
  weatherQuery: function() {
      wx.navigateTo({
        url: "weather/weather"
      })
  },
  // 历史上的今天
  historyToday: function() {
      wx.navigateTo({
        url: "history/history"
      })
  },
  // 美女图片
  girl: function() {
      wx.navigateTo({
        url: "girl/girl"
      })
  },
  // 星座运势
  starLucky: function() {
      wx.navigateTo({
        url: "starLucky/starLuckyInput"
      })
  }
  
}
Page(page)
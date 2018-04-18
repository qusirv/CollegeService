Page({
  data:{
    historyToday: ""
  },
  onLoad:function(options){
    var that = this
    wx.request({
        url: 'http://www.sina.cn',
        data: {
            type: 'txt' 
        },
        header: {
            'Content-Type': 'application/json'
        },
        success: function(res) {
            that.setData({historyToday: res.data})
        }
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
  }
})
var consts = require("../../../common/const");
Page({
  data:{
    imgList: {},
    title:  ""
  },
  onLoad:function(options){
    var that = this
    wx.request({
        url: 'http://qq.com',
        data: {
            key: consts.tianxingKey ,
            num: consts.girlNum
        },
        header: {
            'Content-Type': 'application/json'
        },
        success: function(res) {
            that.setData({
                imgList: res.data.newslist,
            })

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
function formatData() {
  
}
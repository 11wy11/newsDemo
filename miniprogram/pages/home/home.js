// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titleList:[
      {
        text: "推荐",
        id:0,
        content: "我是推荐内容",
        src:"recommend"
      },
      {
        text: "热点",
        id: 1,
        content: "我是热点内容",
        src: ""
      },
      {
        text: "武汉",
        id: 2,
        content: "我是武汉内容",
        src: ""
      }, {
        text: "体育",
        id: 3,
        content: "我是体育内容",
        src: ""
      }, {
        text: "财经",
        id: 4,
        content: "我是财经内容",
        src: ""
      }, {
        text: "娱乐",
        id: 5,
        content: "我是推荐内容",
        src: ""
      }, {
        text: "科技",
        id: 6,
        content: "我是科技内容",
        src: ""
      }, {
        text: "军事",
        id: 7,
        content: "我是军事内容",
        src: ""
      }   
    ],
    flag:0
    
  },
  switchNav(e){
     let id=e.currentTarget.dataset.id;
     if(this.data.flag==id){
       return false;
     }
     this.setData({
       flag:id
     })
     console.log(id);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
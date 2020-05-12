// miniprogram/pages/project/project.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [{
        id: 2,
        name: "项目一",
        schedule: 50
      },
      {
        id: 1,
        name: "项目二",
        schedule: 60
      },
      {
        id: 3,
        name: "超长测试超长测试超长测试超长测试超长测试超长测试超长测试",
        schedule: 30
      },
      {
        id: 4,
        name: "项目二",
        schedule: 60
      },
      {
        id: 5,
        name: "项目二",
        schedule: 60
      },
      {
        id: 6,
        name: "项目二",
        schedule: 60
      },
      {
        id: 7,
        name: "项目二",
        schedule: 60
      },
      {
        id: 8,
        name: "项目二",
        schedule: 60
      },
      {
        id: 9,
        name: "项目二",
        schedule: 60
      },
      {
        id: 10,
        name: "项目二",
        schedule: 60
      }
    ],

    // 项目的option界面控制
    showOption: false,
    projectOptionActions: [{
        name: '编辑',
      },
      {
        name: '删除',
      }
    ],

    // 项目编辑窗口控制
    showProjectPanel: false,
    project: {
      id: null,
      name: "",
      schedule: null
    },

    // 删除确认窗口控制
    showDeleteConfirm: false

  },

  // 取消删除
  cancleDelete: function() {
    this.setData({
      showDeleteConfirm: false
    });
  },

  // 确认删除
  confirmDelete: function() {
    this.setData({
      showDeleteConfirm: false
    });
    // TODO 删除具体逻辑还没写
    wx.showToast({
      title: '删除成功',
      icon: 'none'
    });
  },

  // 未定的菜单栏
  onClickLeft: function(event) {
    wx.showToast({
      title: '未定功能',
      icon: 'none'
    });
    console.log(event.detail);
  },

  // 每个项目的Option按钮
  option: function(event) {
    this.setData({
      showOption: true
    });
    console.log(event.currentTarget.dataset);
  },

  // 点击具体项目时触发
  projectDetail: function(event) {
    console.log(event.currentTarget.dataset);
  },

  // Option窗口关闭控制
  onOptionClose: function() {
    this.setData({
      showOption: false
    });
  },

  // 弹出选项窗口后动作
  onOptionSelect: function(event) {
    console.log(event.detail.name);
    if (event.detail.name == "编辑") {
      this.setData({
        showProjectPanel: true
      });
    } else if (event.detail.name == "删除") {
      this.setData({
        showDeleteConfirm: true
      });
    }
  },

  // 新建按钮
  onNewProject: function(event) {
    this.setData({
      showProjectPanel: true
    });
  },

  onCloseShowProjectPanel: function() {
    this.setData({
      showProjectPanel: false
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})
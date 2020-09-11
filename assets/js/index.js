$(function () {
    // 调用 getUserInfo 获取用户基本信息
    getUserInfo()
})
// 获取用户基本信息
function getUserInfo() {
    $.ajax({
        method: 'GET',
        url: '/my/userinfo',
        // header 就是请求头配置对象
        // headers: {
        //     Authorization: localStorage.getItem('token') || ''
        // },
        success: function (res) {
            if (res.status !== 0) {
                return layui.layer.msg('获取用户信息失败!')
            }
            // 调用renderAvatar 渲染用户头像
            renderAvatar(res.data)
        },
        // 无论成功还是失败都会调用 complete 回调函数
        // complete: function (res) {
        //     // 在conplete中回调函数中 可以使用res.responseJSON 可以拿到服务器响应回来的数据
        //     if (res.responseJSON.status === 1 && res.responseJSON.message === '身份认证失败！') {
        //         // 强制清空token
        //         localStorage.removeItem('token')
        //         // 强制跳转到登录页面
        //         location.href = '/login.html'
        //     }
        // }
    })
}
// 渲染用户的头像
function renderAvatar(user) {
    // 获取用户名称
    var name = user.nickname || user.username
    $('#welcome').html('欢迎&nbsp;&nbsp;' + name)
    // 按需渲染用户头像
    if (user.user_pic !== null) {
        // 渲染图片图像
        $('.layui-nav-img').attr('src', user.user_pic).show()
        $('.text-avatar').hide()
    } else {
        // 渲染文字头像
        $('.layui-nav-img').hide()
        var first = name[0].toUpperCase()
        $('.text-avatar').html(first).show()
    }
}
// 
var layer = layui.layer
$('#btnLogout').on('click', function () {
    // 提示用户确认是否退出
    layer.confirm('确定退出登录?', { icon: 3, title: '提示' }, function (index) {
        //do something
        //  清空本地存储中的token
        localStorage.removeItem('token')
        // 跳转到登录页
        location.href = '/login.html'
        // 关闭 confirm 询问框
        layer.close(index)
    });
})
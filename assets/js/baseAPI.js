// 每次调用$.get() 或$.post()过$.ajax()的时候 会先调用ajaxPrefilter这个函数
// 这个函数中我们可以拿到我们给ajax提供的配置对象
$.ajaxPrefilter(function (options) {
    options.url = 'http://ajax.frontend.itheima.net' + options.url
    // 再发起真正的ajax请求之前 统一拼接请求的根路径
    console.log(options.url);
})
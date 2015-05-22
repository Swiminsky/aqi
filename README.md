#绿叶
页面预览：[http://iwxy.me/aqi](http://iwxy.me/aqi)

##功能简介
一个简单的可以提供空气质量指数(AQI)查询的网站。适配移动设备，可以在IOS设备中添加至桌面，默认显示杭州市下沙监测站的空气检测数据，可以显示杭州、丽水的空气质量指数。

##数据来源
感谢[pm25.in](http://pm25.in/)提供的数据支持

##技术概要
0. 静态页面，仅index.html单体，服务器端只需要nginx即可（apache同理）
0. 使用bootcdn，angular.js-1.3.15，bootstrap-3.1.1，angular-ui-bootstrap-0.13.0
0. 不涉及数据库操作，直接调用pm25.in接口，避免跨域访问错误，在服务器端配置了反向代理
0. 使用Angular.js处理页面，页面展示使用了Bootstrap以及ui.bootstrap
0. 搜索功能基于angular的数据绑定，是对所有获得到的aqi数据信息的直接搜索

##未完待续
如果喜欢这个作品，可以星( Star )我，或者叉 (Fork) 我
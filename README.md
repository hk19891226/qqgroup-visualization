# qqgroup-visualization

## 新的分支[table](https://github.com/gstok/qqgroup-visualization/tree/table)（整合服务端，npm run start直接启动）
![效果图](https://github.com/gstok/qqgroup-visualization/blob/table/img/1.png)

## QQ群关系可视化查询，3D力导向图
![效果图](https://github.com/gstok/qqgroup-visualization/blob/master/result/1.jpg)

## 配置数据库（需要300GB以上磁盘剩余空间）
+ 下载安装[SqlServer2008R2](ed2k://%7Cfile%7Ccn_sql_server_2008_r2_standard_x86_x64_ia64_dvd_522239.iso%7C4662884352%7C18EB3AE3828811617488F2CE8E5B8420%7C/)，配置好用户名以及密码，必要时需配置数据库允许远传登录
+ 下载[数据库备份文件](https://pan.baidu.com/s/1bz36WurfQIuyBRykyqXBug)
+ 解压压缩包，恢复数据库备份文件到SqlServer

## 搭建服务端
+ 下载安装Node.js环境
+ npm全局安装webpack和webpack-dev-server

## 运行
+ 进入项目目录
+ npm install
+ npm run start

## 操作系统要求
+ 因为使用的数据库是SqlServer数据库，所以推荐使用Windows操作系统
+ 当然服务端使用的是Node，如果你连接到的是远程的SqlServer数据库的话，是可以使用任何支持Node的系统的

## 数据库说明
+ 数据库请使用SqlServer2008R2或更新版本的SqlServer
+ 数据库说明
    + 索引说明
        + 我没有修改数据，只是在QQ号字段以及群号字段上加了索引用来优化查询速度
    + 存储过程说明
        + queryByGroupNum 传入群号查询关联的力导向图数据
        + queryByQQNum 传入QQ号查询关联的力导向图数据
        + queryByQQNumExt 传入QQ号进行二层关联查询，得出力导向图数据
        + queryTableByGroupNum 传入群号查询群成员信息表
        + queryTableByQQNum 传入QQ号查询QQ加群信息表

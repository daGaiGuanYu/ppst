# PPST
构建于 node 之上的文件管理工具(命令行中操作)

# 有什么用
尽管有各种各样的**包\文件\版本管理工具**（maven、npm、git，甚至各种网盘）  
有时候某些文件，我们还是需要去复制、粘贴  
比如项目的配置文件、一些不值得上传到代码仓库但有时候也会经常用到的**轮子**、……  
ppst 就是为解决这个问题而生

# 安装
##### 安装 node
> 首先确保你的电脑上有 [node](https://nodejs.org/zh-cn/)，下载好之后，一直“下一步”，就好了

##### 安装 ppst

```bash
npm install -g ppst
```

# 简单应用
##### 添加文件
```bash
ppst add [文件名(名字可以随便起)] [文件地址]
```
比如：
```bash
ppst add 百度首页的html文件 https://www.baidu.com/
```

##### 下载模板
```bash
ppst p 百度首页的html文件
```

这样，百度首页的html文件就会下载到**当前目录**下

# 一些建议
+ 每个人的技术领域都不一样，你应该、也值得拥有一个自己的模板仓库，只需要注册一个 gitee 或者 github 就可以了

# 一些问题
> Q：被保存的文件只能用 http 链接吗？  
> A：是的

> Q：我的文件在本地，如何生成链接呢？  
> A：可以上传到 gitee，如果你的文件不值得上传 gitee，也就不值得使用 ppst 来管理了  
![gitee原始文件](https://raw.githubusercontent.com/daGaiGuanYu/ppst/master/asset/gitee-demo.jpg)

> Q：我的文件不想传到公网，有没有文件私有的解决方案
> A：目前没有，考虑以后添加。你也可以 pull 一个 request，我们一起建立更好用的 ppst

> Q：为什么操作提示用中文？而不用更通用都英文
> A：码者没有那么大的梦想，只想在自己的小圈子里使用，如果愿意的话，你可以 pull 一个 request，我们一起建立更国际化的 ppst

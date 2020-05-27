如果你不了解 ppst 请先看看[简介](https://github.com/daGaiGuanYu/ppst/blob/master/readme.md)

# 区分一下“文件名”与“下载的文件的名字”
例如你这样添加了一个文件：
```bash
ppst add vue https://cn.vuejs.org/js/vue.js
```
那么文件名是 vue，而下载好之后的文件的名字是 vue.js（取自下载链接最后一段路径）  
为了区分，我们把**下载好之后的文件的名字叫做“下载文件的名”

# 添加文件
##### 基本操作
```bash
ppst add vue https://cn.vuejs.org/js/vue.js
```
这样，就添加了一个叫 vue 的文件

##### 自定义下载文件的名
只需要在文件名后添加一个斜线，紧接着，下载文件的名：（中间没有空格）
```bash
ppst add vue/vue.haha https://cn.vuejs.org/js/vue.js
```

##### 带上文件夹
文件多了之后，就乱，有了“文件夹”之后，能一定程度缓解一下
```bash
ppst add lib.vue https://cn.vuejs.org/js/vue.js
ppst add lib.jq https://code.jquery.com/jquery-3.5.1.js
```
这样，就添加了两个文件，一个 vue，一个 jq，并且他们都在 lib “文件夹”下面

##### 自定义下载文件名 且 带上文件夹
```bash
ppst add lib.vue/vue.haha https://cn.vuejs.org/js/vue.js
```

# 查看已添加的文件
##### 基本操作
```bash
ppst ls
```
##### 查看某文件夹下的文件
比如，查看 lib 文件夹下的 front 文件夹里有哪些文件：
```bash
ppst ls lib.front
```

# 下载文件
##### 基本操作
```bash
ppst p vue
```
> 须确保 vue 文件在根目录下
##### 下载某文件夹下的文件
比如，下载 lib 文件夹下的 vue 文件
```bash
ppst p lib.vue
```

##### 下载一个文件夹下的所有文件
```bash
ppst p lib
```

# 删除文件
```bash
ppst delete lib.vue
```

# 配置文件
配置文件记录了你添加了哪些文件  
路径是：```~/.ppst.json```  
如果你需要换电脑，可以把这个文件直接复制到新电脑的家目录下

# 未来的规划
+ 更新（重点重点重点！！！），即 ```ppst update``` 命令
+ 交互式
+ 文件下载结果更人性化
+ 文件夹管理

## hexo-number-title
使用 uuid 作为唯一值，为每篇文章设一个不重复的id值作为 url

## 安装与使用

### 安装
```bash
npm install hexo-number-title --save
```

### 配置 _config.yml
``` yml
number_title:
  enable: true
```

### 使用
```bash
hexo poi # 初始化
hexo g
```

**注意**

- 第一次请务必执行初始化操作 `hexo poi`

- 执行 `hexo clean` 命令并不会重建 id ，但若改变了 uuid 则会创建一个新的 id

- 重置全部 id, 请参考前一条

- id 数据存放于 trolls.json

### 问题
目前第一次要自己手动初始化数据文件, id 改变后之前使用的还是会留下来

### DEMO
[VCGPGSZO](http://hluglk.top)

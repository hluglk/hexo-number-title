## hexo-number-title
为每篇文章生成不重复的 id 如 `http://hluglk.top/archives/170434/`

## 更新说明
### 1.2.1
修复了一个导致开关失效的 bug，以及重构了部分代码。

### 1.2.0
目前较完美的版本  
没有了之前的数据冗余问题，现在只要新增文章就会生成  
~~**唯一的问题大概就是不兼容之前的版本了吧**~~
> 想保留数据升级请查看注意事项

### 1.x.x
之前实现方式太麻烦了，还会导致数据冗余

## 安装与使用

### 安装
```bash
npm install hexo-number-title --save
```

### 配置 _config.yml
``` yml
number_title:
  enable: true
  index: 170435 # 初始值
```

### 使用
```bash
hexo poi # 初始化 只需执行一次
hexo g # 初始化后执行此命令将使所有文章生效
hexo n "test title" # 只对当前新生成文章生效
```

### 注意
- 第一次请务必执行初始化操作 `hexo poi`
- 执行 `hexo clean` 命令并不会重建 id
- 若要重置只需执行 `hexo poi` 再执行 `hexo g`
- 数据存放于 trolls.json

> 由于项目几乎重写了,所以导致不兼容 `1.2.0` 之前的版本。  
所以更新后需要重新 `poi` 一次，然后修改 `trolls.json` 文件里的 `isPoi` 为 `false`
```json
{"isPoi":false,"index":170436} 
```

### EXAMPLE
[VCGPGSZO](http://hluglk.top)

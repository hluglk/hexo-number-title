## hexo-number-title
为每篇文章生成不重复的 id 如 `http://hluglk.top/archives/170434/`

**不兼容 1.2.0 以前的版本**  
若之前已经在使用了的，为了不重置数据请重新 `poi` 并手动修改 `trolls.json` 中的 `isPoi` 为 `false`

```json
{"isPoi":false,"index":170436} 
```

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

**注意**

- 第一次请务必执行初始化操作 `hexo poi`

- 执行 `hexo clean` 命令并不会重建 id

- 若要重置所有只需执行 `hexo poi` 在执行 `hexo g` 及可

- 数据存放于 trolls.json

### EXAMPLE
[VCGPGSZO](http://hluglk.top)

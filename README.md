## hexo-number-title
使用 uuid 作为唯一值，为每篇文章设一个不重复的id值作为 url

## 安装与使用

### 安装
```bash
npm install hexo-number-title --save
```
### 使用
配置hexo根项目下的`_config.yml`

```yml
number_title:
  enable: true
```
**注意**：
第一次使用时务必初始化
```bash
hexo poi
```

执行 `hexo clean` 命令并不会改变 id 值，但若修改了 uuid 则会创建一个新的    
若要初始化参考上一条

### DEMO
[VCGPGSZO](hluglk.top)
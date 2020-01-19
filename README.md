# hexo-number-title
use timestamp generated value for the permalink `http://hluglk.top/archives/1500846116013/`

### INSTALL
```bash
# npm
npm install hexo-number-title --save
# yarn 
yarn add hexo-number-title
```

### COMMAND
```
$ hexo new test    
INFO  Created: ~/newblog/source/_posts/test.md

$ hexo number-title -h
Usage: hexo number-title 

Description:
hexo-number-title plugin, For all didn't set the permalink post

Options:
  -f, --force  overwrite permalink
```

### EXAMPLE

`hexo number-title`
```
# before
---
title: test
---

# after
---
title: test
permalink: 1500846110
---
```

-----------------------

`hexo number-title -f`
```
# before
---
title: test
permalink: has-been-set-value
---

# after
---
title: test
permalink: 1500846112
---
```
---------------
`hexo new test`
```
---
title: test
permalink: 1500846112
---
```

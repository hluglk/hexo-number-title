'use strict';

const front = require('hexo-front-matter');
const fs = require('hexo-fs');

hexo.extend.console.register('number-title', 'Hexo-number-title plugin command, For all didn\'t set the permalink post', {
  options: [
    { name: '-f, --force', desc: 'overwrite permalink' }
  ]
}, async args => {
  let index = new Date().getTime();
  hexo.extend.filter.register('before_post_render', data => {
    if (data.layout !== 'post') return data

    let lines = front.parse(data.raw);
    if (isNaN(lines.permalink) || (args.f || args.force)) {
      lines.permalink = parseInt(index++);
      fs.writeFileSync(data.full_source, '---\n' + front.stringify(lines), 'utf-8');
    }
  });
  
  await hexo.call('clean');
  await hexo.call('generate');
  hexo.exit();
});

hexo.on('new', post => {
  let lines = post.content.split('\n');
  let timestamp = new Date().getTime();
  let index = lines.findIndex(item => item === 'permalink:');
  if (index > -1) {
    lines[index] += (' ' + timestamp);
  } else {
    lines.splice(-2, 0, 'permalink: ' + timestamp);
  }

  post.content = lines.join('\n');
  if (post.path !== false) {
    fs.writeFile(post.path, post.content);
  }
});

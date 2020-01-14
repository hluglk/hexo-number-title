'use strict';

var front = require('hexo-front-matter');
var fs = require('hexo-fs');

let flushData = data => {
  let lines = front.parse(data.raw);
  let date = lines.date;
  let timestamp = Date.parse(new Date(date)) / 1000;
  lines.permalink = parseInt(timestamp);
  fs.writeFileSync(data.full_source, '---\n' + front.stringify(lines), 'utf-8');
  // console.log("write complete");
}

let newPost = post => {
  let lines = post.content.split('\n');
  let index = lines.findIndex(item => /date: /.test(item));
  let date = lines[index].replace("date: ","");
  let timestamp = Date.parse(new Date(date)) / 1000;

  index = lines.findIndex(item => item === 'permalink:');
  if (index > -1) {
    lines[index] += (' ' + timestamp);
  } else {
    lines.splice(1, 0, 'permalink: ' + timestamp);
  }

  post.content = lines.join('\n');
  if (post.path !== false) {
    fs.writeFile(post.path, post.content);
  }

}

exports.flush = flushData;
exports.new = newPost;

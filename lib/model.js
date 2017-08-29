'use strict';

var front = require('hexo-front-matter');
var fs = require('hexo-fs');

var dbJson;
var customType;

let flushData = data => {
  let lines = front.parse(data.raw);
  let date = lines.date;
  let timestamp = Date.parse(new Date(date)) / 1000;
  if (!customType) customType = dbJson;
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

let save = localConfig => {
  if (customType) {
    if (customType.index > localConfig.index) customType.isPoi = false;
    fs.writeFileSync(fileName, JSON.stringify(customType), "utf-8");
  }
}

let poi = localConfig => {
  customType = {
    "isPoi": localConfig.isPoi
  };
}

exports.flush = flushData;
exports.save = save;
exports.poi = poi;
exports.new = newPost;

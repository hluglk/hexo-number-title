'use strict';

var front = require('hexo-front-matter');
var fs = require('hexo-fs');

var dbJson;
var customType;
const fileName = "trolls.json";

let flushData = data => {
  dbJson = JSON.parse(fs.readFileSync(fileName));
  if (dbJson.isPoi) {
    let lines = front.parse(data.raw);
    if (!customType) customType = dbJson;
    lines.permalink = parseInt(customType.index++);
    fs.writeFileSync(data.full_source, '---\n' + front.stringify(lines), 'utf-8');
    // console.log("write complete");
  }
}

let newPost = post => {
  customType = JSON.parse(fs.readFileSync(fileName));
  let lines = post.content.split('\n');
  let index = lines.findIndex(item => item === 'permalink:');
  if (index > -1) {
    lines[index] += (' ' + customType.index++);
  } else {
    lines.splice(1, 0, 'permalink: ' + customType.index++);
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
    "isPoi": localConfig.isPoi,
    "index": localConfig.index
  };
}

exports.flush = flushData;
exports.save = save;
exports.poi = poi;
exports.new = newPost;

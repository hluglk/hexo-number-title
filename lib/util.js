'use strict';

let uuid = require('uuid');
let front = require('hexo-front-matter');
let fs = require('hexo-fs');

var dbJson = JSON.parse(fs.readFileSync("db.json"));
let customType = [];

let created = data => {
  // console.log("start");
  let lines = front.parse(data.raw);
  if (!lines.uuid) {
    lines.uuid = uuid.v1();
  }
  let md = JSON.stringify(lines.date);
  let id = md.split('T')[0].substring(3,md.length-1).replace('-','').replace('-','');

  // console.log('init');
  customType = dbJson.models.customType;

  for (var index = 0; index < customType.length; index++) {
    var value = customType[index];
    // console.log('uuid matching');
    if (value.uuid === lines.uuid) {
      // console.log('matches scuuessfully');
      lines.permalink = value.id;
      break;
    } else if (customType.length === index+1) {
      // console.log('uuid no't matches successfully');
      lines.permalink = id + customType.length;
      customType.push({
        "uuid": lines.uuid,
        "id": lines.permalink
      });
    }
  }

  // console.log('start writing');
  fs.writeFileSync(data.full_source, '---\n' + front.stringify(lines), 'utf-8');
  // console.log("write complete");
}

let saveJSON = () => {
  var _cache = JSON.parse(fs.readFileSync("db.json"));
  if (customType.length > 0){
    _cache.models.customType = customType;
  } else {
    _cache.models.customType = dbJson.models.customType;
  }
  fs.writeFileSync("db.json", JSON.stringify(_cache), "utf-8");
}

let poi = () => {
  customType.push({
    "uuid": "example",
    "id": 0
  });
}

exports.created = created;
exports.saveJSON = saveJSON;
exports.poi = poi;

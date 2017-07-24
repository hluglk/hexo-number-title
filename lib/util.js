'use strict';

var uuid = require('uuid');
var front = require('hexo-front-matter');
var fs = require('hexo-fs');

var dbJson;
var customType = [];

let created = data => {
  dbJson = JSON.parse(fs.readFileSync("trolls.json"));
  let lines = front.parse(data.raw);
  if (!lines.uuid) {
    lines.uuid = uuid.v4();
  }
  let md = JSON.stringify(lines.date);
  let id = md.split('T')[0].substring(3,md.length-1).replace('-','').replace('-','');

  if (customType.length === 0) {
    customType = dbJson;
  }

  for (let index = 0; index < customType.length; index++) {
    let value = customType[index];
    // console.log('uuid matching');
    if (value.uuid === lines.uuid) {
      // console.log('matches scuuessfully');
      lines.permalink = value.id;
      break;
    } else if (customType.length === index+1) {
      // console.log('uuid no't matches successfully');
      lines.permalink = parseInt(id + customType.length);
      customType.push({
        "uuid": lines.uuid,
        "id": lines.permalink
      });
    }
  }

  fs.writeFileSync(data.full_source, '---\n' + front.stringify(lines), 'utf-8');
  // console.log("write complete");
}

let saveJSON = () => {
  if (customType.length > 0){
    fs.writeFileSync("trolls.json", JSON.stringify(customType), "utf-8");
  }
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

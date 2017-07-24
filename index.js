'use strict';

let utils = require('./lib/util.js');
var hexo = hexo || {};
var config = hexo.config;

hexo.extend.filter.register('before_post_render', data => {
  if (!config.number_title.enable || data.layout !== 'post') {
    return data;
  }
  utils.created(data);
})

hexo.extend.console.register('poi', 'poi ?', function(args){
  utils.poi();
});

hexo.on('exit',function(){
  utils.saveJSON();
})
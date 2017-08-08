'use strict';

var model = require('./lib/model.js');
var hexo = hexo || {};
var config = hexo.config;

hexo.extend.filter.register('before_post_render', data => {
  if (!config.number_title.enable || data.layout !== 'post') {
    return data;
  }
  model.flush(data);
})

hexo.extend.console.register('poi', 'poi ?', function(args){
  if (config.number_title.enable){}
    model.poi(config.number_title);
});

hexo.on('new',function(post){
  if (config.number_title.enable)
    model.new(post);
});

hexo.on('exit',function(){
  if (config.number_title.enable)
    model.save(config.number_title);
});

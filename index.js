'use strict';

var model = require('./lib/model.js');
var hexo = hexo || {};
var config = hexo.config;

hexo.extend.filter.register('before_post_render', data => {
  if (data.layout !== 'post') return data;
  if (config.number_title.enable) model.flush(data);
});

hexo.extend.console.register('poi', 'poi ?', args => {
  config.number_title.isPoi = (args.f || args.flush) ? true:false;
  if (config.number_title.enable) model.poi(config.number_title);
});

hexo.on('new', post => {
  if (config.number_title.enable) model.new(post);
});

hexo.on('exit', () => {
  if (config.number_title.enable) model.save(config.number_title);
});

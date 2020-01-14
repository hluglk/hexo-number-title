'use strict';

var model = require('./lib/model.js');
var hexo = hexo || {};
var config = hexo.config;

hexo.extend.filter.register('before_post_render', data => {
  if (data.layout !== 'post') return data;
  if (config.number_title.enable && config.number_title.before_post_render) model.flush(data);
});

hexo.on('new', post => {
  if (config.number_title.enable) model.new(post);
});

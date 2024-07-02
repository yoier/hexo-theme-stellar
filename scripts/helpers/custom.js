'use strict';

hexo.extend.tag.register('stellar_infor', function(args){
    const repo = 'https://github.com/xaoxuu/hexo-theme-stellar';
    const { version } = require('../../package.json');
    if (!args) {
      return repo;
    } else if (args == 'name') {
      return 'Stellar';
    } else if (args == 'version') {
      return version;
    }
    return '';
  });
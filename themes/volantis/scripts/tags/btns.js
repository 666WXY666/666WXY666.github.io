'use strict';

function postBtns(args, content) {
  return `<div class="btns ${args.join(' ')}">
            ${hexo.render.renderSync({text: content, engine: 'markdown'}).split('\n').join('')}
          </div>`;
}

function postCell(args, content) {
  args = args.join(' ').split(',')
  let text = args[0] || ''
  let url = args[1] || ''
  text = text.trim()
  url = url.trim()
  if (url.length > 0) {
    url = "href='" + url + "'"
  }
  let icon = ''
  let img = 'https://cdn.jsdelivr.net/gh/666WXY666/cdn/img/placeholder/placeholder.svg'
  if (args.length > 2) {
    if (args[2].indexOf(' fa-') > -1) {
      icon = args[2].trim()
    } else {
      img = args[2].trim()
    }
  }
  if (icon.length > 0) {
    return `<p class='cell'><a ${url} title='${text}'><i class='${icon}'></i>${text}</a></p>`
  } else {
    return `<p class='cell'><a ${url} title='${text}'><img src='${img}'>${text}</a></p>`
  }
}

hexo.extend.tag.register('btns', postBtns, {ends: true});
hexo.extend.tag.register('cell', postCell);

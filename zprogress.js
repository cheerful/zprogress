// zprogress (c) 2013 Thomas Fuchs
// MIT-licensed - https://github.com/madrobby/zprogress

;(function($){
  var html =
    '<style>#zprogress{position:fixed;top:0;left:0;width:100%;height:3px;opacity:0;pointer-events:none;-webkit-pointer-events:none;z-index:1000}'+
    '#zprogress_indicator{width:100%;margin-left:-100%;height:100%;background:#1c88ff}'+
    '</style>'+
    '<div id=zprogress><div id=zprogress_indicator></div></div>',
    $wrapper, $indicator, value, timeout

  function init(){
    if($wrapper) return

    $('body').append(html)
    $wrapper = $('#zprogress')
    $indicator = $('#zprogress_indicator')
  }

  function anim(){
    $indicator.animate({ translateX: value*100+'%' }, 200)
  }

  function clear(){
    if(timeout) clearTimeout(timeout)
    timeout = undefined
  }

  function trickle(){
    setTimeout(function(){
      $.zprogress.inc((0.85-value)*.035*Math.random())
      trickle()
    }, 350+(400*Math.random()))
  }

  $.zprogress = {
    start: function(){
      init()
      clear()
      value = .1
      $wrapper.animate({ opacity: 1 })
      $indicator.animate({ translateX: '0%' }, 0)
      anim()
      trickle()
    },
    inc: function(delta){
      if(value<.85) value+=delta||.05
      anim()
    },
    set: function(newValue){
      init()
      clear()
      value = newValue
      anim()
      trickle()
    },
    done: function(){
      init()
      clear()
      value = 1
      anim()
      setTimeout(function(){$wrapper.animate({ opacity: 0 })}, 100)
    },
    color: function(color){
      init()
      $indicator.css({ backgroundColor: color })
    }
  }
})(Zepto)
zprogress
=========

Thin-line progress bar with fake trickling for Zepto. You know, like iOS [redacted].

<img src="http://f.cl.ly/items/3t1l0Q1k3p1n0U2q1g1A/zprogress.gif" width="336" height="87">

Heavily inspired by https://github.com/rstacruz/nprogress, which is awesome
but requires jQuery. By making use of Zepto's CSS-based animation
(and webkit-only stuff), zprogress is leaner (but won't work on as
many devices, so YMMV).

Otherwise, not regarding CSS, zprogress is a pretty much a drop-in
replacement for nprogress. Note that zprogress doesn't have a rotating
spinner, just the progress bar.

To use it, just include zprogress.js. There's no CSS file.

```javascript
// show progress bar
$.zprogress.start()

// ok, you're done
$.zprogress.done()

// set to percentage (0..1)
$.zprogress.set(0.4)

// increase a bit
$.zprogress.inc()

// set color of progress bar
$.zprogress.color('gold')
```

You can automatically show the progress bar while any Ajax request is active:

```javascript
$(document).on('ajaxStart', function(){ $.zprogress.start() })
$(document).on('ajaxStop', function(){  $.zprogress.done()  })
```

This will work even if multiple Ajax requests are active at the same time.
If you have an Ajax request where you don't want the progress bar, you can give
that request the `global: false` option.

If you need to change stuff around for your app, I recommend to fork zprogress and
make adaptions in your fork. This should be reasonably easy and it's better than
to add tons of customization features that would inflate the code base.

Note that the progress bar color customization feature was explicitly added to
make it really easy to set the "accent" color in iOS [redacted].

zprogress won't work with jQuery because it relies on the features of
[Zepto's animate method](http://zeptojs.com/#animate).

zprogress is licensed under the terms of the MIT license.

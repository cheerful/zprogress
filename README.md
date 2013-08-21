zprogress
=========

Thin-line progress bar with fake trickling for Zepto. You know, like iOS [redacted].

Heavily inspired by https://github.com/rstacruz/nprogress, which is awesome
but requires jQuery. By making use of Zepto's CSS-based animation
(and webkit-only stuff), zprogress is leaner (but won't work on as
many devices, so YMMV).

Otherwise, not regarding CSS, zprogress is a drop-in
replacement for nprogress.

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

Note that zprogress won't work with jQuery because it relies on the features of
[Zepto's animate method](http://zeptojs.com/#animate).

zprogress is licensed under the terms of the MIT license.
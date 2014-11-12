# ![](https://github.com/rmisio/circular-progress-bar/blob/master/example.png?raw=true) circular-progress-bar

A javascript circular progress bar widget.  The widget utilizes jQuery, although it's not written in the traditional jQuery plugin style. To use, create an instance via the init function (which acts as an object factory):

    progBar = circularProgressBar.init(args);

The init method takes an object with the following (optional) arguments:

* **radius** - the radius of the progress bar (default is `150`)
* **width** - the width of the progress bar (default is `20`)
* **container** - the containing element the progress bar will be appended to (default is `$('body')`)
* **activeColor** - the color of the active part of the progress bar. This is the part that will move as the bar progresses. (default is `orange`)
* **inactiveColor** - the 'matte' of the progress bar. This is the part of the progress bar behind the active color (i.e. when the progress is 0 - this part is 100% visible). (default is `#d1d1d1`)
* **innerColor** - this is the color of the inner "hollow" part of the progress bar. The idea is to set this to you page background color. This is bit of a *gotcha!* if you ever wanted to put the progress bar on a non-solid color background. (default is `#ffffff`)
* **initalPercentage** - the initial progress percentage (0-100) of the bar (default is `0`)

For example:

    progBar = circularProgressBar.init({
      radius: 100, 
      width: 20,
      container: $('#progress-bar'),
      activeColor: 'green',
      innerColor: 'tomato',
      initialPercentage: 33
    });

The following method is available to your instance:

* **progBar.setValue( val )** - set the progress percentage (0 - 100).

For example:

    progBar.setValue(63);

## Gotchas!

The progress bar requires *inline svg* support. Of note, this is absent in IE8 and lower. You're probably going to want to detect the support and use an alternate progress bar if the support is lacking.

For example, if using [Modernizer](https://github.com/Modernizr/Modernizr):

    if (Modernizr.inlinesvg) {
      progBar = circularProgressBar.init({
        radius: 100, 
        width: 20,
        container: $('#progress-bar'),
        activeColor: 'green',
        innerColor: 'tomato',
        initialPercentage: 33
      });
    } else {
        // Need to user a different progress bar / spinner
    }
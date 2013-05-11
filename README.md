# ![](https://github.com/rmisio/circular-progress-bar/blob/master/example.png?raw=true) circular-progress-bar

A javascript circular progress bar widget.  The widget utilizes jQuery, although it's not written in the traditional jQuery plugin style. To use, create an instance via the init function (which acts as an object factory):

    progBar = circularProgressBar.init(radius, width, $container, activeColor, inactiveColor, innerColor, initalPercentage);

* **radius** - the radius of the progress bar
* **width** - the width of the progress bar
* **$container** - the containing element the progress bar will be appended to
* **activeColor** - the color of the active part of the progress bar. This is the part that will move as the bar progresses.
* **inactiveColor** - the 'matte' of the progress bar. This is the part of the progress bar behind the active color (i.e. when the progress is 0 - this part is 100% visible).
* **innerColor** - this is the color of the inner "hollow" part of the progress bar. The idea is to set this to you page background color. This is bit of a *gotcha!* if you ever wanted to put the progress bar on a non-solid color background.
* **initalPercentage** - the initial progress percentage (0-100) of the bar

For example:

    progBar = circularProgressBar.init(150, 20, $('#progBarContainer'), 'orange', 'green', '#fff', 25);

The following method is available to your instance:

* **progBar.setValue( val )** - set the progress percentage (0 - 100).

For example:

    progBar.setValue(63);

## Gotchas!

The progress bar requires *inline svg* support. Of note, this is absent in IE8 and lower. You're probably going to want to detect the support and use an alternate progress bar if the support is lacking.

For example, if using [Modernizer](https://github.com/Modernizr/Modernizr):

    if (Modernizr.inlinesvg) {
        progBar = circularProgressBar.init(150, 20, $('#progBarContainer'), 'orange', 'green', '#fff', 25);
    } else {
        // Need to user a different progress bar / spinner
    }


    
var circularProgressBar = (function($) {
  function polarToCartesian(centerX, centerY, radius, percent) {
    var percent = percent - 25, // make the starting point top center
      angleInRadians = (percent * .01 * 360) * Math.PI / 180.0,
      x = centerX + radius * Math.cos(angleInRadians),
      y = centerY + radius * Math.sin(angleInRadians);
    
    return {
      x: x,
      y: y
    }
  }
  
  function CircularProgressBar($container, radius, width, activeColor, inactiveColor, innerColor, initialPercentage) {
    this.radius = radius;
    this.$el = $('<svg xmlns="http://www.w3.org/2000/svg" version="1.1">' +
      '<circle cx="' + radius + '" cy="' + radius + '" r="' + radius +'"' +
      'fill="' + inactiveColor + '"></circle>' +
      '<path fill="' + activeColor + '"></path>' + 
      '<circle cx="' + radius + '" cy="' + radius + '" r="' +
      (radius - width) + '" fill="' + innerColor + '"></circle></svg');
    
    this.$progressCircle = $('path', this.$el);
    
    this.setValue(initialPercentage);
    
    if ($container) {
      $container.append(this.$el);
    }
  }
  
  CircularProgressBar.prototype.renderPathData = function(percent) {
    var rendered,
      radius = this.radius,
      template = "M" + radius + "," + radius + " L"  + radius + ",0 " + "A" + radius + "," + radius + " 0 {largeArcFlag},1 {x},{y}",
      coords = polarToCartesian(radius, radius, radius, percent);
      
    rendered = template.replace('{largeArcFlag}', percent > 50 ? '1' : '0');
    rendered = rendered.replace('{x}', coords.x);
    rendered = rendered.replace('{y}', coords.y);
    
    return rendered;
  }
  
  CircularProgressBar.prototype.setValue = function(percent) {
    percent = percent >= 100 ? 99.99999 : percent;
    percent = percent < 0 ? 0 : percent;
    
    this.$progressCircle.attr('d', this.renderPathData(percent));
  }
  
  function init(radius, width, $container, activeColor, inactiveColor, innerColor, initalPercentage) {
    radius = parseInt(radius);
    width = parseInt(width);
    initalPercentage = parseInt(initalPercentage);
    
    if (!($.isNumeric(radius) && radius > 0)) {
      throw new Exception('circularProgress : init() : Radius must be a positive number.');
    } else if (!($.isNumeric(width) && width > 0)) {
      throw new Exception('circularProgress : init() : width must be a positive number.');
    }  
    
    $container = $container || $();
    activeColor = activeColor || "orange";
    inactiveColor = inactiveColor || "#d1d1d1";
    innerColor = innerColor || "white";
    initalPercentage = $.isNumeric(initalPercentage) ? initalPercentage : 0;
    
    return new CircularProgressBar(
            $container, radius, width, activeColor, inactiveColor, innerColor, initalPercentage
        );
  }
  
  return {
    init: init
  }
})(jQuery);
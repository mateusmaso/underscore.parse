(function(root, factory) {

  if (typeof exports !== 'undefined') {
    var _ = require('underscore');
    if (typeof module !== 'undefined' && module.exports)
      module.exports = factory(_);
    exports = factory(_);
  } else {
    root._.mixin(factory(root._));
  }

}(this, function(_) {

  var isArray = function(value) {
    return value.charAt(0) == '[' && value.charAt(value.length - 1) == ']';
  };

  var isObject = function(value) {
    return value.charAt(0) == '{' && value.charAt(value.length - 1) == '}';
  };

  return {
    parse: function(value) {
      if (value == "") {
        return value;
      } else if (value == "true") {
        value = true;
      } else if (value == "false") {
        value = false;
      } else if (value == "null") {
        value = null;
      } else if (value == "undefined") {
        value = undefined;
      } else if (!isNaN(value) && value != "") {
        value = parseFloat(value);
      } else if (isArray(value) || isObject(value)) {
        try {
          value = JSON.parse(value);
        } catch (exception) { }
      }

      return value;
    }
  };

}));
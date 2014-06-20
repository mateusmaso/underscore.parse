(function(_) {

  _.parse = function(value) {
    try {
      value = JSON.parse(value);
    } catch (exception) {}

    return value == "undefined" ? undefined : value;
  };

})(_);

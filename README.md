underscore.parse
================
This library is an extension for Underscore which allows parsing string value into primitives.

## Features

* Primitive value parser.

## Dependencies

* underscore.js (>= 1.5)

## Examples

```javascript
var boolean = "true";
var integer = "123";
var object = "{foo: {bar: {}}}";

_.parse(boolean); // true
_.parse(integer); // 123
_.parse(object); // {foo: {bar: {}}}
```

## License

Copyright (c) 2014 Mateus Maso. Released under an MIT license.

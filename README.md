underscore.parse [![Build Status](https://travis-ci.org/mateusmaso/underscore.parse.svg?branch=master)](https://travis-ci.org/mateusmaso/underscore.parse)
================
This library is an extension for Underscore which allows parsing string value into primitives.

## Features

* Primitive value parser.

## Dependencies

* underscore.js (>= 1.5)

## Node

```javascript
var _ = require('underscore');
_.mixin(require('underscore.parse'));
```

## Examples

```javascript
var boolean = "true";
var integer = "123";
var array = "[1, true, null]";
var object = '{"foo": {"bar": 123}}';

_.parse(boolean);
_.parse(integer);
_.parse(array);
_.parse(object);
```

## License

Copyright (c) 2014 Mateus Maso. Released under an MIT license.

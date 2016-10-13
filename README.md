# array-member

<span class="badge-npmversion"><a href="https://npmjs.org/package/array-member" title="View this project on NPM"><img src="https://img.shields.io/npm/v/array-member.svg" alt="NPM version" /></a></span>

> Simple javascript module for node.js to test whether an object is a member of an array.

## Installation

Add to a node project:

```sh
npm install array-member --save
```

## Usage

```javascript
var arrMember = require('array-member');

var myArr = ['a','b','c','e'];

// prints true
console.log(arrMember.member('a', myArr));

// prints false
console.log(arrMember.member('d', myArr));
```

## API

There is just one function in this module:

* `arrMember.member(obj, array)` returns `true` if `obj` is in `array`, and returns `false` otherwise


## License

This module is licensed under the terms of the MIT License, Copyright (c) 2016 R Steiner

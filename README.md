# array-member

[![NPM](https://nodei.co/npm/array-member.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/array-member/)

[![npm](https://img.shields.io/npm/v/array-member.svg?maxAge=2592000?style=plastic)](https://www.npmjs.com/package/array-member) [![license](https://img.shields.io/github/license/cranndarach/array-member.svg?maxAge=2592000?style=plastic)](https://github.com/cranndarach/array-member/blob/master/LICENSE)

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

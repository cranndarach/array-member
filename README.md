# array-member

[![NPM](https://nodei.co/npm/array-member.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/array-member/)

[![npm](https://img.shields.io/npm/v/array-member.svg?maxAge=2592000?style=plastic)](https://www.npmjs.com/package/array-member) [![license](https://img.shields.io/github/license/cranndarach/array-member.svg?maxAge=2592000?style=plastic)](https://github.com/cranndarach/array-member/blob/master/LICENSE)

> Javascript module to test for array/object membership.

## Installation

Add to a node project:

```sh
npm install array-member --save
```

## Usage

Test whether an object is a member of an array:

```javascript
var arrMember = require('array-member');
var myArr = ["a","b","c","e"];
// prints "true":
console.log(arrMember.member("a", myArr));
// prints "false":
console.log(arrMember.member("d", myArr));
```

Test whether a string is a key for an object:

```javascript
var arrMember = require('array-member');
var myObj = {
    abc: 123,
    test:"success",
    hello:"world"
};
// prints "true":
console.log(arrMember.objectKey("abc", myObj));
// prints "false":
console.log(arrMember.objectKey("def", myObj));
```

Test whether an object is a value in another object:

```javascript
var arrMember = require('array-member');
var myObj = {
    abc: 123,
    test:"success",
    hello:"world"
};
// prints "true":
console.log(arrMember.objectValue("success", myObj));
// prints "false":
console.log(arrMember.objectValue("foo", myObj));
```

## API

This module consists of three functions:

* `arrMember.member(item, array)` returns `true` if `item` is in `array`, and returns `false` otherwise.
* `arrMember.objectKey(key, obj)` returns `true` if `key` is the name of a property in `obj`, and returns `false` otherwise.
* `arrMember.objectValue(value, obj)` returns `true` if `value` is the value of a property in `obj`, and returns `false` otherwise.


## License

This module is licensed under the terms of the MIT License, Copyright (c) 2016 R Steiner

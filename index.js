exports.member = function(item, arr, kind='full', caseSensitive=true) {
    'use strict';
    var item = caseSensitive ? item : item.toLowerCase();
    for (let i = 0; i < arr.length; i++) {
        if (searchItem(item, arr[i], kind, caseSensitive)) {
            return true;
        }
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] == item) {
    //         return true;
    //     }
    }
    return false;
}

exports.objectKey = function(key, obj, kind='full', caseSensitive=true) {
    'use strict';
    var key = caseSensitive ? key : key.toLowerCase();
    var keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
        if (searchItem(key, keys[i], kind, caseSensitive)) {
            return true;
        }
        // if (keys[i] == key) {
        //     return true;
        // }
    }
    return false;
}

exports.objectValue = function(value, obj, kind='full', caseSensitive=true) {
    'use strict';
    var value = caseSensitive ? value : value.toLowerCase();
    var keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
        if (searchItem(value, obj[keys[i]], kind, caseSensitive)) {
            return true;
        }
    //     let check = caseSensitive ? obj[keys[i]] : obj[keys[i]].toLowerCase();
    //     switch (kind) {
    //       case 'contains':
    //           if (check.search(value) !== -1) {
    //             return true;
    //           }
    //           break;
    //       case 'begins':
    //           if (check.search(value) === 0) {
    //             return true;
    //           }
    //           break;
    //       case 'full':
    //           if (check === value) {
    //             return true;
    //           }
    //           break;
    //       default:
    //           throw new Error(`Unrecognized option kind='${kind}'. Please use 'full', 'contains', or 'begins'.`);
    //     }
    }
    return false;
};

function searchItem(searchFor, searchIn, kind, caseSensitive) {
    var searchIn = caseSensitive ? searchIn : searchIn.toLowerCase();
    switch (kind) {
        case 'contains':
            if (earchIn.search(searchFor) !== -1) {
              return true;
            }
           break;
        case 'begins':
            if (searchIn.search(searchFor) === 0) {
              return true;
            }
            break;
        case 'full':
            if (searchIn === searchFor) {
              return true;
            }
            break;
        default:
            throw new Error(`Unrecognized option kind='${kind}'. Please use 'full', 'contains', or 'begins'.`);
    }
    return false;
}

// From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
if (!Object.keys) {
  Object.keys = (function() {
    'use strict';
    var hasOwnProperty = Object.prototype.hasOwnProperty,
        hasDontEnumBug = !({ toString: null }).propertyIsEnumerable('toString'),
        dontEnums = [
          'toString',
          'toLocaleString',
          'valueOf',
          'hasOwnProperty',
          'isPrototypeOf',
          'propertyIsEnumerable',
          'constructor'
        ],
        dontEnumsLength = dontEnums.length;

    return function(obj) {
      if (typeof obj !== 'object' && (typeof obj !== 'function' || obj === null)) {
        throw new TypeError('Object.keys called on non-object');
      }

      var result = [], prop, i;

      for (prop in obj) {
        if (hasOwnProperty.call(obj, prop)) {
          result.push(prop);
        }
      }

      if (hasDontEnumBug) {
        for (i = 0; i < dontEnumsLength; i++) {
          if (hasOwnProperty.call(obj, dontEnums[i])) {
            result.push(dontEnums[i]);
          }
        }
      }
      return result;
    };
  }());
}

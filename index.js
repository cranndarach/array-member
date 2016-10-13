exports.member = function(obj, arr) {
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] == obj) {
            return true;
        }
    }
    return false;
}

function member(obj, arr) {
    for(let i = 0; i < arr.length; i++) {
        if arr[i] == obj {
            return true;
        }
    }
    return false;
}

var utils = {
    unique: function(array) {
        return array.filter(function(item, index, array) {
            return array.indexOf(item, 0) === index;
        })
    }
}
export default utils;
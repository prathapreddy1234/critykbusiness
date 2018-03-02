'use strict';

myApp.filter("val", function () {
    return function (d, k) {
        if (!d || !k)
            return '';
        return k in d ? d[k] : '';
    };
});

myApp.filter("split", function () {
    return function (string, separator) {
        if (!string)
            return [];
        if (!separator)
            separator = ',';
        return string.split(separator);
    };
});

myApp.filter("splitn", function () {
    return function (string, separator) {
        if (!string)
            return [];
        if (!separator)
            separator = ',';
        return string.split(separator).map(function (x) {
            return parseInt(x);
        });
    };
});

myApp.filter("def", function () {
    return function (string, value) {
        if (!string)
            return value ? value : '--';
        return string;
    };
});

myApp.filter("keys", function () {
    return function (obj) {
        return obj ? Object.keys(obj) : [];
    };
});

myApp.filter("values", function () {
    return function (obj) {
        return obj ? Object.values(obj) : [];
    };
});

myApp.filter("sortd", function () {
    return function (obj) {        
        var array = Object.keys(obj).map(function (key) {
            return {id: key, name: obj[key]};
        });
        array.sort(function (first, second) {
            if (first.name === second.name)
                return 0;
            if (first.name > second.name)
                return 1;
            if (first.name < second.name)
                return -1;
        });
        return array;
    };
});

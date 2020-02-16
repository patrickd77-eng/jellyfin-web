define(['appStorage', 'events'], function (appStorage, events) {
    'use strict';

    var data = {};

    function WebSettings() {
        fetch("/config.json").then(function (response) {
            data = response.json();
        })
    }

    WebSettings.prototype.getMultiServer = function () {
        return data.multiServer || false;
    };

    return new WebSettings();
});

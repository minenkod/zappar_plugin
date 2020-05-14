var exec = require('cordova/exec');

exports.startZappar = function (arg0, success, error) {
    exec(success, error, 'ZapparPlugin', 'startZappar', [arg0]);
};

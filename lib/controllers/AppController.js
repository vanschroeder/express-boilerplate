// Generated by CoffeeScript 1.6.2
var _this = this;

(function() {
  return exports.AppController = (function() {
    'use strict';
    var domain;

    domain = require('domain');

    function AppController() {
      var _this = this;

      (this.__domain = domain.create()).on('error', function(e) {
        var e2;

        error(e.stack);
        try {
          (setTimeout((function() {
            return process.exit(1);
          }), 30000)).unref();
          global.httpServer.close();
          cluster.worker.disconnect();
          _this.res.statusCode = 500;
          _this.res.setHeader('content-type', 'text/plain');
          return _this.res.end('An unexpected error was encountered\n');
        } catch (_error) {
          e2 = _error;
          return error('error handling was FUBAR', e2.stack);
        }
      });
    }

    AppController.prototype.run = function(method) {
      var _this = this;

      return this.__domain.run(function() {
        return _this[method]();
      });
    };

    AppController.prototype.send = function(response) {
      return this.res.send(response);
    };

    AppController.prototype.emit = function(response) {};

    AppController.prototype.handRequest = function(req, res, next) {
      return console.log('handRequest');
    };

    return AppController;

  })();
})();
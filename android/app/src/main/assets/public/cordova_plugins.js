
  cordova.define('cordova/plugin_list', function(require, exports, module) {
    module.exports = [
      {
          "id": "cordova-plugin-advanced-http.http",
          "file": "plugins/cordova-plugin-advanced-http/www/advanced-http.js",
          "pluginId": "cordova-plugin-advanced-http",
        "clobbers": [
          "cordova.plugin.http"
        ]
        },
      {
          "id": "cordova-plugin-device.device",
          "file": "plugins/cordova-plugin-device/www/device.js",
          "pluginId": "cordova-plugin-device",
        "clobbers": [
          "device"
        ]
        },
      {
          "id": "cordova-plugin-statusbar.statusbar",
          "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
          "pluginId": "cordova-plugin-statusbar",
        "clobbers": [
          "window.StatusBar"
        ]
        },
      {
          "id": "cordova-plugin-advanced-http.cookie-handler",
          "file": "plugins/cordova-plugin-advanced-http/www/cookie-handler.js",
          "pluginId": "cordova-plugin-advanced-http"
        },
      {
          "id": "cordova-plugin-advanced-http.dependency-validator",
          "file": "plugins/cordova-plugin-advanced-http/www/dependency-validator.js",
          "pluginId": "cordova-plugin-advanced-http"
        },
      {
          "id": "cordova-plugin-advanced-http.error-codes",
          "file": "plugins/cordova-plugin-advanced-http/www/error-codes.js",
          "pluginId": "cordova-plugin-advanced-http"
        },
      {
          "id": "cordova-plugin-advanced-http.global-configs",
          "file": "plugins/cordova-plugin-advanced-http/www/global-configs.js",
          "pluginId": "cordova-plugin-advanced-http"
        },
      {
          "id": "cordova-plugin-advanced-http.helpers",
          "file": "plugins/cordova-plugin-advanced-http/www/helpers.js",
          "pluginId": "cordova-plugin-advanced-http"
        },
      {
          "id": "cordova-plugin-advanced-http.js-util",
          "file": "plugins/cordova-plugin-advanced-http/www/js-util.js",
          "pluginId": "cordova-plugin-advanced-http"
        },
      {
          "id": "cordova-plugin-advanced-http.local-storage-store",
          "file": "plugins/cordova-plugin-advanced-http/www/local-storage-store.js",
          "pluginId": "cordova-plugin-advanced-http"
        },
      {
          "id": "cordova-plugin-advanced-http.lodash",
          "file": "plugins/cordova-plugin-advanced-http/www/lodash.js",
          "pluginId": "cordova-plugin-advanced-http"
        },
      {
          "id": "cordova-plugin-advanced-http.messages",
          "file": "plugins/cordova-plugin-advanced-http/www/messages.js",
          "pluginId": "cordova-plugin-advanced-http"
        },
      {
          "id": "cordova-plugin-advanced-http.ponyfills",
          "file": "plugins/cordova-plugin-advanced-http/www/ponyfills.js",
          "pluginId": "cordova-plugin-advanced-http"
        },
      {
          "id": "cordova-plugin-advanced-http.public-interface",
          "file": "plugins/cordova-plugin-advanced-http/www/public-interface.js",
          "pluginId": "cordova-plugin-advanced-http"
        },
      {
          "id": "cordova-plugin-advanced-http.tough-cookie",
          "file": "plugins/cordova-plugin-advanced-http/www/umd-tough-cookie.js",
          "pluginId": "cordova-plugin-advanced-http"
        },
      {
          "id": "cordova-plugin-advanced-http.url-util",
          "file": "plugins/cordova-plugin-advanced-http/www/url-util.js",
          "pluginId": "cordova-plugin-advanced-http"
        }
    ];
    module.exports.metadata =
    // TOP OF METADATA
    {
      "cordova-plugin-advanced-http": "3.2.2",
      "cordova-plugin-device": "2.0.2",
      "cordova-plugin-statusbar": "2.4.2"
    };
    // BOTTOM OF METADATA
    });
    
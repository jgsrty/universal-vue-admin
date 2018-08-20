"use strict";
const merge = require("webpack-merge");
const prodEnv = require("./prod.env");

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_URL:
    '"https://www.easy-mock.com/mock/5b61451dcbc4e209c427f9fc/dev_api_v1"'
});

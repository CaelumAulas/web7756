const presets = [
    ["@babel/env", {
      targets: {
        ie: "11",
        chrome: "58",
        esmodules: false
      },
      useBuiltIns: "usage"
    }]
  ];

module.exports = { presets };
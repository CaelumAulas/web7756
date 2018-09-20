const presets = [
    ["@babel/env", {
      targets: {
        ie: "11",
        chrome: "58",
      },
      useBuiltIns: "usage"
    }]
  ];

module.exports = { presets };
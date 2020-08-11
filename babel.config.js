module.exports = {
  // presets: [
  //   '@vue/cli-plugin-babel/preset'
  // ]

  // 按需加载
  "presets": [
    ["es2015", { "modules": false }]
  ],
  "plugins": [["component", [
    {
      "libraryName": "element-ui",
      "styleLibraryName": "theme-chalk"
    }
  ]]]
}

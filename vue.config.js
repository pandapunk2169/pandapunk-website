const path = require("path"); //引入path模块

function resolve(dir) {
  return path.join(__dirname, dir); //path.join(__dirname)设置绝对路径
}

console.log(process.env.VUE_APP_BASE_URL);

module.exports = {
  publicPath: "/",
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [],
    },
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    },
  },
  productionSourceMap: false,
  chainWebpack: (config) => {
    config.resolve.alias
      //set第一个参数：设置的别名，第二个参数：设置的路径
      .set("@", resolve("./src")) //根据目录的层级来决定，也可以自行设
      .set("components", resolve("./src/components"))
      .set("views", resolve("./src/views"))
      .set("assets", resolve("./src/assets"));

    if (process.env.NODE_ENV !== "production") return;
    config.optimization.splitChunks({
      chunks: "all",
      maxSize: 1024 * 1024,
      automaticNameDelimiter: ".",
    });

    const chunkFilename = "js/[name].js";
    config.output.filename(chunkFilename).chunkFilename(chunkFilename).end();
  },
};

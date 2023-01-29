module.exports = {
    configureWebpack: {
      module: {
        rules: [
          {
            test: /\.(csv|xlsx|xls|pdf)$/,
            loader: 'file-loader',
            options: {
              name: `files/[name].[ext]`
            }
          }
        ],
       },
    },
  };
  
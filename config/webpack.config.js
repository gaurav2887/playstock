var chalk = require("chalk");
var fs = require('fs');
var path = require('path');
var useDefaultConfig = require('@ionic/app-scripts/config/webpack.config.js');

var env = process.env.IONIC_ENV;

console.log('IONIC ENV: '+process.env.IONIC_ENV);
useDefaultConfig.dev.resolve.alias = {
  "@app/env": path.resolve(environmentPath(env))
};

// if(env == 'dev') {
//   useDefaultConfig.dev.resolve.alias = {
//     "@app/env": path.resolve(environmentPath('dev'))
//   };
// } else if(env == 'prod') {
//   useDefaultConfig.prod.resolve.alias = {
//     "@app/env": path.resolve(environmentPath('prod'))
//   };
// }

// useDefaultConfig[env].resolve.alias = {
//   "@app/env": path.resolve(environmentPath(env))
// };


// if (env !== 'prod' && env !== 'dev') {
//   // Default to dev config
//   useDefaultConfig[env] = useDefaultConfig.dev;
//   useDefaultConfig[env].resolve.alias = {
//     "@app/env": path.resolve(environmentPath(env))
//   };
// }

function environmentPath(env) {
  console.log('Playstock Environment: '+env);
  var filePath = './src/environments/environment' + (env === 'prod' ? '' : '.' + env) + '.ts';
  if (!fs.existsSync(filePath)) {
    console.log(chalk.red('\n' + filePath + ' does not exist!'));
  } else {
    console.log('filepath: '+ filePath);
    return filePath;
  }
}

module.exports = function () {
  return useDefaultConfig;
};
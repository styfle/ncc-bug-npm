const { npmInstall } = require('./npm-wrapper');

npmInstall('/tmp/copee', 'copee', '1.0.6')
    .then(() => console.log('Success'))
    .catch(err => console.error('Ooops ', err));

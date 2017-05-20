const path = require('path');

const PATH = {
  root: path.resolve(__dirname, '../'),
  src: path.resolve(__dirname, '../src/'),
  build: path.resolve(__dirname, '../.tmp/'),
  dist: path.resolve(__dirname, '../dist/'),
  actions: path.resolve(__dirname, '../src/actions/'),
  reducers: path.resolve(__dirname, '../src/reducers/'),
  core: path.resolve(__dirname, '../src/core/'),
  components: path.resolve(__dirname, '../src/components/'),
  constants: path.resolve(__dirname, '../src/constants/'),
  images: path.resolve(__dirname, '../src/images/'),
  styleUtils: path.resolve(__dirname, '../src/styles/utils/'),
  store: path.resolve(__dirname, '../src/styles/store/')
};

module.exports = PATH;

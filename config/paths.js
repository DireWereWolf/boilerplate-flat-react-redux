const path = require('path');

const PATH = {
  root: path.resolve(__dirname, '../'),
  src: path.resolve(__dirname, '../src/'),
  build: path.resolve(__dirname, '../.tmp/'),
  dist: path.resolve(__dirname, '../dist/'),
  actions: path.resolve(__dirname, '../src/actions/'),
  reducers: path.resolve(__dirname, '../src/reducers/'),
  components: path.resolve(__dirname, '../src/components/'),
  images: path.resolve(__dirname, '../src/images/'),
  styleUtils: path.resolve(__dirname, '../src/styles/utils/')
};

module.exports = PATH;

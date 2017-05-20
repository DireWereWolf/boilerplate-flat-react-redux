// Custom app path import
const {
  root,
  src,
  build,
  actions,
  reducers,
  components,
  constants,
  core,
  images,
  styleUtils,
  store,

  // nodes paths

} = require('./paths');

// App aliases for webpack alias
const ALIASES = {
  actions: actions,
  components: components,
  core: core,
  store: store,
  images: images,
  reducers: reducers,

  // nodes (pages)

};

module.exports = ALIASES;

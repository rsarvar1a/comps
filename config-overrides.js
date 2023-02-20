const reactPaths = require('react-scripts/config/paths')
const path = require('path')

reactPaths.appSrc = path.resolve(__dirname, 'src/website')
reactPaths.appIndexJs = path.resolve(__dirname, 'src/website/index.js')

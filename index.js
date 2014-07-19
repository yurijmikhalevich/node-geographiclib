/**
 * @license GPLv3
 * @author 0@39.yt (Yurij Mikhalevich)
 */
var lib = {};

require('./lib/Math')(lib);
require('./lib/Geodesic')(lib);
require('./lib/GeodesicLine')(lib);
require('./lib/PolygonArea')(lib);
require('./lib/DMS')(lib);
require('./lib/Interface')(lib);

module.exports = lib;

const GetSatellitesController = require('./routes/satellites/get.satellites.controller');
const PostSatellitesController = require('./routes/satellites/post.satellites.controller');

const GetSatelliteController = require('./routes/satellites/satellite/get.satellite.controller');
const PutSatelliteController = require('./routes/satellites/satellite/put.satellite.controller');
const PatchSatelliteController = require('./routes/satellites/satellite/patch.satellite.controller');
const DeleteSatelliteController = require('./routes/satellites/satellite/delete.satellite.controller');

const GetSatelliteDetailsController = require('./routes/satellites/satellite/details/get.satelliteDetails.controller');
const GetFullSatelliteDetailsController = require('./routes/satellites/satellite/details/id/get.fullSatelliteDetails.controller');

exports.register = async (server) => {
    server.route([
        { method: 'GET', path: '/satellites', handler: GetSatellitesController.getSatellites },
        { method: 'POST', path: '/satellites', handler: PostSatellitesController.createSatellite },

        { method: 'GET', path: '/satellites/{id}', handler: GetSatelliteController.getSatellite },
        { method: 'PUT', path: '/satellites/{id}', handler: PutSatelliteController.updateSatelliteFull },
        { method: 'PATCH', path: '/satellites/{id}', handler: PatchSatelliteController.updateSatellitePartial },
        { method: 'DELETE', path: '/satellites/{id}', handler: DeleteSatelliteController.deleteSatellite },
        
        { method: 'GET', path: '/satellites/{id}/details', handler: GetSatelliteDetailsController.getSatelliteDetails },
        { method: 'GET', path: '/satellites/{id}/details/{detailId}', handler: GetFullSatelliteDetailsController.getDetailById },
    ]);
};

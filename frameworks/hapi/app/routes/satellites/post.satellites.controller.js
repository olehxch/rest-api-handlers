exports.createSatellite = (req, h) => {
  return {
    command: 'GetSatelliteSpecificDetail',
    query: req.query,
    params: req.params,
    data: req.payload
  };
};

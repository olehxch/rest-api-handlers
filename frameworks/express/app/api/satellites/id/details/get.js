module.exports = function GetSatelliteDetails(req, res) {
  res.send({
    command: 'GetSatelliteDetails',
    query: req.query,
    params: req.params,
    data: req.body
  });
};
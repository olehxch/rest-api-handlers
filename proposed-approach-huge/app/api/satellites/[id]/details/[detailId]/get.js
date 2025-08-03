module.exports = function GetSatelliteSpecificDetail(req, res) {
  res.send({
    command: 'GetSatelliteSpecificDetail',
    query: req.query,
    params: req.params,
    data: req.body
  });
};
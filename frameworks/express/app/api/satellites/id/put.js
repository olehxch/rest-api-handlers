module.exports = function UpdateSatellite(req, res) {
  res.send({
    command: 'UpdateSatellite',
    query: req.query,
    params: req.params,
    data: req.body
  });
};
module.exports = function PartialUpdateSatellite(req, res) {
  res.send({
    command: 'PartialUpdateSatellite',
    query: req.query,
    params: req.params,
    data: req.body
  });
};
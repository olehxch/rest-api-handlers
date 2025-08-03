module.exports = function DeleteSatellite(req, res) {
  res.send({
    command: 'DeleteSatellite',
    query: req.query,
    params: req.params,
    data: req.body
  });
};
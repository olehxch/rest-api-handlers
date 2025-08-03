module.exports = function AddSatellite(req, res) {
  res.send({
    command: 'AddSatellite',
    query: req.query,
    params: req.params,
    data: req.body
  });
};
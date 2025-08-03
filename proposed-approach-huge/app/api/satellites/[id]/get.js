module.exports = function GetSatellite(req, res) {
  res.send({
    command: 'GetSatellite',
    query: req.query,
    params: req.params,
    data: req.body
  });
};
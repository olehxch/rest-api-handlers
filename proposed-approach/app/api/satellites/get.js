module.exports = function ListSatellites(req, res) {
  res.send({
    command: 'ListSatellites',
    query: req.query,
    params: req.params,
    data: req.body
  });
};
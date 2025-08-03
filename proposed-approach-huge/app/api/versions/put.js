module.exports = function PutVersionsversions(req, res) {
  res.send({
    command: 'PUTVersionsversions',
    resource: 'versions',
    method: 'PUT',
    path: '/versions',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
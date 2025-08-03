module.exports = function DeleteVersionsversions(req, res) {
  res.send({
    command: 'DELETEVersionsversions',
    resource: 'versions',
    method: 'DELETE',
    path: '/versions',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
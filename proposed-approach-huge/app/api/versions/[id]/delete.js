module.exports = function DeleteVersionsversionsid(req, res) {
  res.send({
    command: 'DELETEVersionsversionsid',
    resource: 'versions',
    method: 'DELETE',
    path: '/versions/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
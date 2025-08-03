module.exports = function PutVersionsversionsid(req, res) {
  res.send({
    command: 'PUTVersionsversionsid',
    resource: 'versions',
    method: 'PUT',
    path: '/versions/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
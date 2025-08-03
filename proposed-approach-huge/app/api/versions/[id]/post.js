module.exports = function PostVersionsversionsid(req, res) {
  res.send({
    command: 'POSTVersionsversionsid',
    resource: 'versions',
    method: 'POST',
    path: '/versions/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
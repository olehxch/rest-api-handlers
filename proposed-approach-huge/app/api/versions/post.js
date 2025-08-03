module.exports = function PostVersionsversions(req, res) {
  res.send({
    command: 'POSTVersionsversions',
    resource: 'versions',
    method: 'POST',
    path: '/versions',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
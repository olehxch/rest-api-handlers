module.exports = function PutWidgetswidgetsid(req, res) {
  res.send({
    command: 'PUTWidgetswidgetsid',
    resource: 'widgets',
    method: 'PUT',
    path: '/widgets/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
module.exports = function DeleteWidgetswidgetsid(req, res) {
  res.send({
    command: 'DELETEWidgetswidgetsid',
    resource: 'widgets',
    method: 'DELETE',
    path: '/widgets/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
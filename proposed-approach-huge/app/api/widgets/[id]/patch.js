module.exports = function PatchWidgetswidgetsid(req, res) {
  res.send({
    command: 'PATCHWidgetswidgetsid',
    resource: 'widgets',
    method: 'PATCH',
    path: '/widgets/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
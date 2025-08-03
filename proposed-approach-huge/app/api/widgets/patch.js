module.exports = function PatchWidgetswidgets(req, res) {
  res.send({
    command: 'PATCHWidgetswidgets',
    resource: 'widgets',
    method: 'PATCH',
    path: '/widgets',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
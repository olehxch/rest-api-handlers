module.exports = function PutWidgetswidgets(req, res) {
  res.send({
    command: 'PUTWidgetswidgets',
    resource: 'widgets',
    method: 'PUT',
    path: '/widgets',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
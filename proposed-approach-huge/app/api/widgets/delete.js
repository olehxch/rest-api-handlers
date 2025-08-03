module.exports = function DeleteWidgetswidgets(req, res) {
  res.send({
    command: 'DELETEWidgetswidgets',
    resource: 'widgets',
    method: 'DELETE',
    path: '/widgets',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
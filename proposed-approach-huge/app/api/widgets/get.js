module.exports = function GetWidgetswidgets(req, res) {
  res.send({
    command: 'GETWidgetswidgets',
    resource: 'widgets',
    method: 'GET',
    path: '/widgets',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
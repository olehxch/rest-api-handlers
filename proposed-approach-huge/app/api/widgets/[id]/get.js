module.exports = function GetWidgetswidgetsid(req, res) {
  res.send({
    command: 'GETWidgetswidgetsid',
    resource: 'widgets',
    method: 'GET',
    path: '/widgets/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
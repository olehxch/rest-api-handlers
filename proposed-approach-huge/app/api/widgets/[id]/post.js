module.exports = function PostWidgetswidgetsid(req, res) {
  res.send({
    command: 'POSTWidgetswidgetsid',
    resource: 'widgets',
    method: 'POST',
    path: '/widgets/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
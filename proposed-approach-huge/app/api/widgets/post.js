module.exports = function PostWidgetswidgets(req, res) {
  res.send({
    command: 'POSTWidgetswidgets',
    resource: 'widgets',
    method: 'POST',
    path: '/widgets',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
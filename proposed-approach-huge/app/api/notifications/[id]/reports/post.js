module.exports = function PostNotificationsnotificationsidreports(req, res) {
  res.send({
    command: 'POSTNotificationsnotificationsidreports',
    resource: 'notifications',
    method: 'POST',
    path: '/notifications/:id/reports',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
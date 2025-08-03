module.exports = function PostNotificationsnotifications(req, res) {
  res.send({
    command: 'POSTNotificationsnotifications',
    resource: 'notifications',
    method: 'POST',
    path: '/notifications',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
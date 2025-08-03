module.exports = function PutNotificationsnotificationsidreports(req, res) {
  res.send({
    command: 'PUTNotificationsnotificationsidreports',
    resource: 'notifications',
    method: 'PUT',
    path: '/notifications/:id/reports',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
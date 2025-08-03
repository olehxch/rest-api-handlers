module.exports = function PutNotificationsnotifications(req, res) {
  res.send({
    command: 'PUTNotificationsnotifications',
    resource: 'notifications',
    method: 'PUT',
    path: '/notifications',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
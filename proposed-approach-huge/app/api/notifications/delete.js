module.exports = function DeleteNotificationsnotifications(req, res) {
  res.send({
    command: 'DELETENotificationsnotifications',
    resource: 'notifications',
    method: 'DELETE',
    path: '/notifications',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
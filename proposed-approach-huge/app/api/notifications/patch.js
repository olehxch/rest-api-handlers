module.exports = function PatchNotificationsnotifications(req, res) {
  res.send({
    command: 'PATCHNotificationsnotifications',
    resource: 'notifications',
    method: 'PATCH',
    path: '/notifications',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
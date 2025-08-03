module.exports = function PatchNotificationsnotificationsid(req, res) {
  res.send({
    command: 'PATCHNotificationsnotificationsid',
    resource: 'notifications',
    method: 'PATCH',
    path: '/notifications/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
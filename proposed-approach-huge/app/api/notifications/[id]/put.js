module.exports = function PutNotificationsnotificationsid(req, res) {
  res.send({
    command: 'PUTNotificationsnotificationsid',
    resource: 'notifications',
    method: 'PUT',
    path: '/notifications/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
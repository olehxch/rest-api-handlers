module.exports = function PutNotificationsnotificationsidhistory(req, res) {
  res.send({
    command: 'PUTNotificationsnotificationsidhistory',
    resource: 'notifications',
    method: 'PUT',
    path: '/notifications/:id/history',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
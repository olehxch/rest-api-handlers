module.exports = function PutNotificationsnotificationsidanalytics(req, res) {
  res.send({
    command: 'PUTNotificationsnotificationsidanalytics',
    resource: 'notifications',
    method: 'PUT',
    path: '/notifications/:id/analytics',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
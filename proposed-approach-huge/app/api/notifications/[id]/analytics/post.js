module.exports = function PostNotificationsnotificationsidanalytics(req, res) {
  res.send({
    command: 'POSTNotificationsnotificationsidanalytics',
    resource: 'notifications',
    method: 'POST',
    path: '/notifications/:id/analytics',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
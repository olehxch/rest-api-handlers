module.exports = function GetNotificationsnotificationsidanalytics(req, res) {
  res.send({
    command: 'GETNotificationsnotificationsidanalytics',
    resource: 'notifications',
    method: 'GET',
    path: '/notifications/:id/analytics',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
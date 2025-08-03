module.exports = function GetNotificationsnotificationsidreports(req, res) {
  res.send({
    command: 'GETNotificationsnotificationsidreports',
    resource: 'notifications',
    method: 'GET',
    path: '/notifications/:id/reports',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
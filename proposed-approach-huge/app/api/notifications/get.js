module.exports = function GetNotificationsnotifications(req, res) {
  res.send({
    command: 'GETNotificationsnotifications',
    resource: 'notifications',
    method: 'GET',
    path: '/notifications',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
module.exports = function GetNotificationsnotificationsidhistory(req, res) {
  res.send({
    command: 'GETNotificationsnotificationsidhistory',
    resource: 'notifications',
    method: 'GET',
    path: '/notifications/:id/history',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
module.exports = function GetNotificationsnotificationsid(req, res) {
  res.send({
    command: 'GETNotificationsnotificationsid',
    resource: 'notifications',
    method: 'GET',
    path: '/notifications/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
module.exports = function GetNotificationsnotificationsiddetails(req, res) {
  res.send({
    command: 'GETNotificationsnotificationsiddetails',
    resource: 'notifications',
    method: 'GET',
    path: '/notifications/:id/details',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
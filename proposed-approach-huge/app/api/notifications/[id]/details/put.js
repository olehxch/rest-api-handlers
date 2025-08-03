module.exports = function PutNotificationsnotificationsiddetails(req, res) {
  res.send({
    command: 'PUTNotificationsnotificationsiddetails',
    resource: 'notifications',
    method: 'PUT',
    path: '/notifications/:id/details',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
module.exports = function PostNotificationsnotificationsiddetails(req, res) {
  res.send({
    command: 'POSTNotificationsnotificationsiddetails',
    resource: 'notifications',
    method: 'POST',
    path: '/notifications/:id/details',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
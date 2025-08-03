module.exports = function DeleteNotificationsnotificationsid(req, res) {
  res.send({
    command: 'DELETENotificationsnotificationsid',
    resource: 'notifications',
    method: 'DELETE',
    path: '/notifications/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
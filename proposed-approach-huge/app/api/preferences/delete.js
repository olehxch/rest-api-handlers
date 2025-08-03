module.exports = function DeletePreferencespreferences(req, res) {
  res.send({
    command: 'DELETEPreferencespreferences',
    resource: 'preferences',
    method: 'DELETE',
    path: '/preferences',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
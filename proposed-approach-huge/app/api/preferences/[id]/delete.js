module.exports = function DeletePreferencespreferencesid(req, res) {
  res.send({
    command: 'DELETEPreferencespreferencesid',
    resource: 'preferences',
    method: 'DELETE',
    path: '/preferences/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
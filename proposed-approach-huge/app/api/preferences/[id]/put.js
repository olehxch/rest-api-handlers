module.exports = function PutPreferencespreferencesid(req, res) {
  res.send({
    command: 'PUTPreferencespreferencesid',
    resource: 'preferences',
    method: 'PUT',
    path: '/preferences/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
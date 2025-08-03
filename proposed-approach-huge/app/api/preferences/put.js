module.exports = function PutPreferencespreferences(req, res) {
  res.send({
    command: 'PUTPreferencespreferences',
    resource: 'preferences',
    method: 'PUT',
    path: '/preferences',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
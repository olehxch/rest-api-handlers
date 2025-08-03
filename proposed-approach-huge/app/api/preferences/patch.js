module.exports = function PatchPreferencespreferences(req, res) {
  res.send({
    command: 'PATCHPreferencespreferences',
    resource: 'preferences',
    method: 'PATCH',
    path: '/preferences',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
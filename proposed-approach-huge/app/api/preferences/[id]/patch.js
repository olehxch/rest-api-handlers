module.exports = function PatchPreferencespreferencesid(req, res) {
  res.send({
    command: 'PATCHPreferencespreferencesid',
    resource: 'preferences',
    method: 'PATCH',
    path: '/preferences/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
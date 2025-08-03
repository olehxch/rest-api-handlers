module.exports = function PostPreferencespreferences(req, res) {
  res.send({
    command: 'POSTPreferencespreferences',
    resource: 'preferences',
    method: 'POST',
    path: '/preferences',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
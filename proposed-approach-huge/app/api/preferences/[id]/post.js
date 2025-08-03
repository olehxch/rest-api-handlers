module.exports = function PostPreferencespreferencesid(req, res) {
  res.send({
    command: 'POSTPreferencespreferencesid',
    resource: 'preferences',
    method: 'POST',
    path: '/preferences/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
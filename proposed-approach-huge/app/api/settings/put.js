module.exports = function PutSettingssettings(req, res) {
  res.send({
    command: 'PUTSettingssettings',
    resource: 'settings',
    method: 'PUT',
    path: '/settings',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
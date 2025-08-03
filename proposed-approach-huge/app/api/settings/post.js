module.exports = function PostSettingssettings(req, res) {
  res.send({
    command: 'POSTSettingssettings',
    resource: 'settings',
    method: 'POST',
    path: '/settings',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
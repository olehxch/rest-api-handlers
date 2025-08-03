module.exports = function DeleteSettingssettings(req, res) {
  res.send({
    command: 'DELETESettingssettings',
    resource: 'settings',
    method: 'DELETE',
    path: '/settings',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
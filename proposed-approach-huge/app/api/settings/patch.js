module.exports = function PatchSettingssettings(req, res) {
  res.send({
    command: 'PATCHSettingssettings',
    resource: 'settings',
    method: 'PATCH',
    path: '/settings',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
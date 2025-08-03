module.exports = function PatchSettingssettingsid(req, res) {
  res.send({
    command: 'PATCHSettingssettingsid',
    resource: 'settings',
    method: 'PATCH',
    path: '/settings/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
module.exports = function PutSettingssettingsid(req, res) {
  res.send({
    command: 'PUTSettingssettingsid',
    resource: 'settings',
    method: 'PUT',
    path: '/settings/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
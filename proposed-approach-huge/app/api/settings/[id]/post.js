module.exports = function PostSettingssettingsid(req, res) {
  res.send({
    command: 'POSTSettingssettingsid',
    resource: 'settings',
    method: 'POST',
    path: '/settings/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
module.exports = function DeleteSettingssettingsid(req, res) {
  res.send({
    command: 'DELETESettingssettingsid',
    resource: 'settings',
    method: 'DELETE',
    path: '/settings/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
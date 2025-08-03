module.exports = function GetSettingssettingsid(req, res) {
  res.send({
    command: 'GETSettingssettingsid',
    resource: 'settings',
    method: 'GET',
    path: '/settings/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
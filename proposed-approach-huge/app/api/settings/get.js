module.exports = function GetSettingssettings(req, res) {
  res.send({
    command: 'GETSettingssettings',
    resource: 'settings',
    method: 'GET',
    path: '/settings',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
module.exports = function GetPreferencespreferences(req, res) {
  res.send({
    command: 'GETPreferencespreferences',
    resource: 'preferences',
    method: 'GET',
    path: '/preferences',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
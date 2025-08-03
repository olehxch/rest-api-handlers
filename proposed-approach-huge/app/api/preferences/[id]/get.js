module.exports = function GetPreferencespreferencesid(req, res) {
  res.send({
    command: 'GETPreferencespreferencesid',
    resource: 'preferences',
    method: 'GET',
    path: '/preferences/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
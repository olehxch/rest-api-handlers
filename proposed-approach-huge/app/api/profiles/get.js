module.exports = function GetProfilesprofiles(req, res) {
  res.send({
    command: 'GETProfilesprofiles',
    resource: 'profiles',
    method: 'GET',
    path: '/profiles',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
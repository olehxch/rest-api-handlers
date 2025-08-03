module.exports = function GetProfilesprofilesid(req, res) {
  res.send({
    command: 'GETProfilesprofilesid',
    resource: 'profiles',
    method: 'GET',
    path: '/profiles/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
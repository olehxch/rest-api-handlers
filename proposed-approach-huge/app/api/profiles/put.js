module.exports = function PutProfilesprofiles(req, res) {
  res.send({
    command: 'PUTProfilesprofiles',
    resource: 'profiles',
    method: 'PUT',
    path: '/profiles',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
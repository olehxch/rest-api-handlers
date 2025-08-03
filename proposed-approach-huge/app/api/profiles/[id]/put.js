module.exports = function PutProfilesprofilesid(req, res) {
  res.send({
    command: 'PUTProfilesprofilesid',
    resource: 'profiles',
    method: 'PUT',
    path: '/profiles/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
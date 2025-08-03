module.exports = function PostProfilesprofilesid(req, res) {
  res.send({
    command: 'POSTProfilesprofilesid',
    resource: 'profiles',
    method: 'POST',
    path: '/profiles/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
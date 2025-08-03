module.exports = function PostProfilesprofiles(req, res) {
  res.send({
    command: 'POSTProfilesprofiles',
    resource: 'profiles',
    method: 'POST',
    path: '/profiles',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
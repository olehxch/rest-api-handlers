module.exports = function PatchProfilesprofiles(req, res) {
  res.send({
    command: 'PATCHProfilesprofiles',
    resource: 'profiles',
    method: 'PATCH',
    path: '/profiles',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
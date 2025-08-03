module.exports = function PatchProfilesprofilesid(req, res) {
  res.send({
    command: 'PATCHProfilesprofilesid',
    resource: 'profiles',
    method: 'PATCH',
    path: '/profiles/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
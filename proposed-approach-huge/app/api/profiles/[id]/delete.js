module.exports = function DeleteProfilesprofilesid(req, res) {
  res.send({
    command: 'DELETEProfilesprofilesid',
    resource: 'profiles',
    method: 'DELETE',
    path: '/profiles/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
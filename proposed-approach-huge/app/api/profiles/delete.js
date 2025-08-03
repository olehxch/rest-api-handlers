module.exports = function DeleteProfilesprofiles(req, res) {
  res.send({
    command: 'DELETEProfilesprofiles',
    resource: 'profiles',
    method: 'DELETE',
    path: '/profiles',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
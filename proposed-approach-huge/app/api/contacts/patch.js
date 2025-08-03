module.exports = function PatchContactscontacts(req, res) {
  res.send({
    command: 'PATCHContactscontacts',
    resource: 'contacts',
    method: 'PATCH',
    path: '/contacts',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
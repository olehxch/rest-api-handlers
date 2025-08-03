module.exports = function PatchContactscontactsid(req, res) {
  res.send({
    command: 'PATCHContactscontactsid',
    resource: 'contacts',
    method: 'PATCH',
    path: '/contacts/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
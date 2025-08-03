module.exports = function PutContactscontactsid(req, res) {
  res.send({
    command: 'PUTContactscontactsid',
    resource: 'contacts',
    method: 'PUT',
    path: '/contacts/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
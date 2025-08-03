module.exports = function PutContactscontacts(req, res) {
  res.send({
    command: 'PUTContactscontacts',
    resource: 'contacts',
    method: 'PUT',
    path: '/contacts',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
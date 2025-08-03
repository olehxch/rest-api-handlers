module.exports = function DeleteContactscontacts(req, res) {
  res.send({
    command: 'DELETEContactscontacts',
    resource: 'contacts',
    method: 'DELETE',
    path: '/contacts',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
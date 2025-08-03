module.exports = function DeleteContactscontactsid(req, res) {
  res.send({
    command: 'DELETEContactscontactsid',
    resource: 'contacts',
    method: 'DELETE',
    path: '/contacts/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
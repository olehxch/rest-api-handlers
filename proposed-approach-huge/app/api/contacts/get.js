module.exports = function GetContactscontacts(req, res) {
  res.send({
    command: 'GETContactscontacts',
    resource: 'contacts',
    method: 'GET',
    path: '/contacts',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
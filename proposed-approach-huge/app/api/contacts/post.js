module.exports = function PostContactscontacts(req, res) {
  res.send({
    command: 'POSTContactscontacts',
    resource: 'contacts',
    method: 'POST',
    path: '/contacts',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
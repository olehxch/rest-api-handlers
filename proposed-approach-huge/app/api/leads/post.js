module.exports = function PostLeadsleads(req, res) {
  res.send({
    command: 'POSTLeadsleads',
    resource: 'leads',
    method: 'POST',
    path: '/leads',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
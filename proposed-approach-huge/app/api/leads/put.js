module.exports = function PutLeadsleads(req, res) {
  res.send({
    command: 'PUTLeadsleads',
    resource: 'leads',
    method: 'PUT',
    path: '/leads',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
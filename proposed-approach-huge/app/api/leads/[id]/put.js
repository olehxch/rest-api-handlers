module.exports = function PutLeadsleadsid(req, res) {
  res.send({
    command: 'PUTLeadsleadsid',
    resource: 'leads',
    method: 'PUT',
    path: '/leads/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
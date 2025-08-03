module.exports = function PostLeadsleadsid(req, res) {
  res.send({
    command: 'POSTLeadsleadsid',
    resource: 'leads',
    method: 'POST',
    path: '/leads/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
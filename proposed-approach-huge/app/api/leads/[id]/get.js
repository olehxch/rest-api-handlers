module.exports = function GetLeadsleadsid(req, res) {
  res.send({
    command: 'GETLeadsleadsid',
    resource: 'leads',
    method: 'GET',
    path: '/leads/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
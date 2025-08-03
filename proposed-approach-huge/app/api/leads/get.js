module.exports = function GetLeadsleads(req, res) {
  res.send({
    command: 'GETLeadsleads',
    resource: 'leads',
    method: 'GET',
    path: '/leads',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
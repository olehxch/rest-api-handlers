module.exports = function GetAuditsaudits(req, res) {
  res.send({
    command: 'GETAuditsaudits',
    resource: 'audits',
    method: 'GET',
    path: '/audits',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
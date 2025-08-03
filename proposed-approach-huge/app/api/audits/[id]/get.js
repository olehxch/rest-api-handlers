module.exports = function GetAuditsauditsid(req, res) {
  res.send({
    command: 'GETAuditsauditsid',
    resource: 'audits',
    method: 'GET',
    path: '/audits/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
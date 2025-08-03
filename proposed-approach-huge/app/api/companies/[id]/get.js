module.exports = function GetCompaniescompaniesid(req, res) {
  res.send({
    command: 'GETCompaniescompaniesid',
    resource: 'companies',
    method: 'GET',
    path: '/companies/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
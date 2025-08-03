module.exports = function GetCompaniescompanies(req, res) {
  res.send({
    command: 'GETCompaniescompanies',
    resource: 'companies',
    method: 'GET',
    path: '/companies',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
module.exports = function PutCompaniescompanies(req, res) {
  res.send({
    command: 'PUTCompaniescompanies',
    resource: 'companies',
    method: 'PUT',
    path: '/companies',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
module.exports = function DeleteCompaniescompanies(req, res) {
  res.send({
    command: 'DELETECompaniescompanies',
    resource: 'companies',
    method: 'DELETE',
    path: '/companies',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
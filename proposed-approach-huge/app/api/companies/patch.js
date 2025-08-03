module.exports = function PatchCompaniescompanies(req, res) {
  res.send({
    command: 'PATCHCompaniescompanies',
    resource: 'companies',
    method: 'PATCH',
    path: '/companies',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
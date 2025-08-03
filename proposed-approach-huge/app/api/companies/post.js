module.exports = function PostCompaniescompanies(req, res) {
  res.send({
    command: 'POSTCompaniescompanies',
    resource: 'companies',
    method: 'POST',
    path: '/companies',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
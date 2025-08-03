module.exports = function PostCompaniescompaniesid(req, res) {
  res.send({
    command: 'POSTCompaniescompaniesid',
    resource: 'companies',
    method: 'POST',
    path: '/companies/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
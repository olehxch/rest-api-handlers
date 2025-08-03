module.exports = function DeleteCompaniescompaniesid(req, res) {
  res.send({
    command: 'DELETECompaniescompaniesid',
    resource: 'companies',
    method: 'DELETE',
    path: '/companies/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
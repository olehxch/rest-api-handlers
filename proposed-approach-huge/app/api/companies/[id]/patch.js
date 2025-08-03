module.exports = function PatchCompaniescompaniesid(req, res) {
  res.send({
    command: 'PATCHCompaniescompaniesid',
    resource: 'companies',
    method: 'PATCH',
    path: '/companies/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
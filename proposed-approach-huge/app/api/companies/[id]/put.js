module.exports = function PutCompaniescompaniesid(req, res) {
  res.send({
    command: 'PUTCompaniescompaniesid',
    resource: 'companies',
    method: 'PUT',
    path: '/companies/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
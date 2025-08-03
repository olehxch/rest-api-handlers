module.exports = function PutDepartmentsdepartmentsid(req, res) {
  res.send({
    command: 'PUTDepartmentsdepartmentsid',
    resource: 'departments',
    method: 'PUT',
    path: '/departments/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
module.exports = function PutDepartmentsdepartments(req, res) {
  res.send({
    command: 'PUTDepartmentsdepartments',
    resource: 'departments',
    method: 'PUT',
    path: '/departments',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
module.exports = function PatchDepartmentsdepartments(req, res) {
  res.send({
    command: 'PATCHDepartmentsdepartments',
    resource: 'departments',
    method: 'PATCH',
    path: '/departments',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
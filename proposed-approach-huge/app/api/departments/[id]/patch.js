module.exports = function PatchDepartmentsdepartmentsid(req, res) {
  res.send({
    command: 'PATCHDepartmentsdepartmentsid',
    resource: 'departments',
    method: 'PATCH',
    path: '/departments/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
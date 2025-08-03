module.exports = function DeleteDepartmentsdepartmentsid(req, res) {
  res.send({
    command: 'DELETEDepartmentsdepartmentsid',
    resource: 'departments',
    method: 'DELETE',
    path: '/departments/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
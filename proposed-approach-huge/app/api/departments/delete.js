module.exports = function DeleteDepartmentsdepartments(req, res) {
  res.send({
    command: 'DELETEDepartmentsdepartments',
    resource: 'departments',
    method: 'DELETE',
    path: '/departments',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
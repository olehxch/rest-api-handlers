module.exports = function PostDepartmentsdepartments(req, res) {
  res.send({
    command: 'POSTDepartmentsdepartments',
    resource: 'departments',
    method: 'POST',
    path: '/departments',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
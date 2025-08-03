module.exports = function PostDepartmentsdepartmentsid(req, res) {
  res.send({
    command: 'POSTDepartmentsdepartmentsid',
    resource: 'departments',
    method: 'POST',
    path: '/departments/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
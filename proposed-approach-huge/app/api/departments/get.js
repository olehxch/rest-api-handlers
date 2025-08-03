module.exports = function GetDepartmentsdepartments(req, res) {
  res.send({
    command: 'GETDepartmentsdepartments',
    resource: 'departments',
    method: 'GET',
    path: '/departments',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
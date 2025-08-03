module.exports = function GetDepartmentsdepartmentsid(req, res) {
  res.send({
    command: 'GETDepartmentsdepartmentsid',
    resource: 'departments',
    method: 'GET',
    path: '/departments/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
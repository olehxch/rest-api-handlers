module.exports = function GetEmployeesemployeesid(req, res) {
  res.send({
    command: 'GETEmployeesemployeesid',
    resource: 'employees',
    method: 'GET',
    path: '/employees/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
module.exports = function GetEmployeesemployees(req, res) {
  res.send({
    command: 'GETEmployeesemployees',
    resource: 'employees',
    method: 'GET',
    path: '/employees',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
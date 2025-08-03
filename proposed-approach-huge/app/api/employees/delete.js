module.exports = function DeleteEmployeesemployees(req, res) {
  res.send({
    command: 'DELETEEmployeesemployees',
    resource: 'employees',
    method: 'DELETE',
    path: '/employees',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
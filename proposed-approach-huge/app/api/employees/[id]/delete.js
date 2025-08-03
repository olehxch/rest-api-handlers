module.exports = function DeleteEmployeesemployeesid(req, res) {
  res.send({
    command: 'DELETEEmployeesemployeesid',
    resource: 'employees',
    method: 'DELETE',
    path: '/employees/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
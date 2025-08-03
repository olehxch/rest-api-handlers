module.exports = function PutEmployeesemployees(req, res) {
  res.send({
    command: 'PUTEmployeesemployees',
    resource: 'employees',
    method: 'PUT',
    path: '/employees',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
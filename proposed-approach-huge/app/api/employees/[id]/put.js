module.exports = function PutEmployeesemployeesid(req, res) {
  res.send({
    command: 'PUTEmployeesemployeesid',
    resource: 'employees',
    method: 'PUT',
    path: '/employees/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
module.exports = function PostEmployeesemployees(req, res) {
  res.send({
    command: 'POSTEmployeesemployees',
    resource: 'employees',
    method: 'POST',
    path: '/employees',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
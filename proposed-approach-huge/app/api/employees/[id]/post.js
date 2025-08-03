module.exports = function PostEmployeesemployeesid(req, res) {
  res.send({
    command: 'POSTEmployeesemployeesid',
    resource: 'employees',
    method: 'POST',
    path: '/employees/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
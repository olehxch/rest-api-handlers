module.exports = function PatchEmployeesemployeesid(req, res) {
  res.send({
    command: 'PATCHEmployeesemployeesid',
    resource: 'employees',
    method: 'PATCH',
    path: '/employees/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
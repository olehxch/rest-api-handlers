module.exports = function PatchEmployeesemployees(req, res) {
  res.send({
    command: 'PATCHEmployeesemployees',
    resource: 'employees',
    method: 'PATCH',
    path: '/employees',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
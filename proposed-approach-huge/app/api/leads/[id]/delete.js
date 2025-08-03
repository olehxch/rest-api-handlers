module.exports = function DeleteLeadsleadsid(req, res) {
  res.send({
    command: 'DELETELeadsleadsid',
    resource: 'leads',
    method: 'DELETE',
    path: '/leads/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
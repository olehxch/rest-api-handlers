module.exports = function DeleteLeadsleads(req, res) {
  res.send({
    command: 'DELETELeadsleads',
    resource: 'leads',
    method: 'DELETE',
    path: '/leads',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
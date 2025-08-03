module.exports = function DeleteReportsreportsid(req, res) {
  res.send({
    command: 'DELETEReportsreportsid',
    resource: 'reports',
    method: 'DELETE',
    path: '/reports/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
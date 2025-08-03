module.exports = function PostReportsreportsid(req, res) {
  res.send({
    command: 'POSTReportsreportsid',
    resource: 'reports',
    method: 'POST',
    path: '/reports/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
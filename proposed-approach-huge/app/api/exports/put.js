module.exports = function PutExportsexports(req, res) {
  res.send({
    command: 'PUTExportsexports',
    resource: 'exports',
    method: 'PUT',
    path: '/exports',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
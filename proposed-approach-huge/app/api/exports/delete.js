module.exports = function DeleteExportsexports(req, res) {
  res.send({
    command: 'DELETEExportsexports',
    resource: 'exports',
    method: 'DELETE',
    path: '/exports',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
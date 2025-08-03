module.exports = function DeleteExportsexportsid(req, res) {
  res.send({
    command: 'DELETEExportsexportsid',
    resource: 'exports',
    method: 'DELETE',
    path: '/exports/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
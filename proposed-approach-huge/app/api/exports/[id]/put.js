module.exports = function PutExportsexportsid(req, res) {
  res.send({
    command: 'PUTExportsexportsid',
    resource: 'exports',
    method: 'PUT',
    path: '/exports/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
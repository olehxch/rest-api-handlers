module.exports = function PostExportsexportsid(req, res) {
  res.send({
    command: 'POSTExportsexportsid',
    resource: 'exports',
    method: 'POST',
    path: '/exports/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
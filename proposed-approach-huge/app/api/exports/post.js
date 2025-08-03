module.exports = function PostExportsexports(req, res) {
  res.send({
    command: 'POSTExportsexports',
    resource: 'exports',
    method: 'POST',
    path: '/exports',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
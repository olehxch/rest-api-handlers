module.exports = function GetExportsexports(req, res) {
  res.send({
    command: 'GETExportsexports',
    resource: 'exports',
    method: 'GET',
    path: '/exports',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
module.exports = function GetExportsexportsid(req, res) {
  res.send({
    command: 'GETExportsexportsid',
    resource: 'exports',
    method: 'GET',
    path: '/exports/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
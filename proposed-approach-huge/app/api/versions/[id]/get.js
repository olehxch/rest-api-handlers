module.exports = function GetVersionsversionsid(req, res) {
  res.send({
    command: 'GETVersionsversionsid',
    resource: 'versions',
    method: 'GET',
    path: '/versions/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
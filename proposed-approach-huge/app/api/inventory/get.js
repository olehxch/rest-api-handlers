module.exports = function GetInventoryinventory(req, res) {
  res.send({
    command: 'GETInventoryinventory',
    resource: 'inventory',
    method: 'GET',
    path: '/inventory',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
module.exports = function PutInventoryinventory(req, res) {
  res.send({
    command: 'PUTInventoryinventory',
    resource: 'inventory',
    method: 'PUT',
    path: '/inventory',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
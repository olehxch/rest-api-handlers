module.exports = function DeleteInventoryinventory(req, res) {
  res.send({
    command: 'DELETEInventoryinventory',
    resource: 'inventory',
    method: 'DELETE',
    path: '/inventory',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
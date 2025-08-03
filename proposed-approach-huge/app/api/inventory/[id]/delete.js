module.exports = function DeleteInventoryinventoryid(req, res) {
  res.send({
    command: 'DELETEInventoryinventoryid',
    resource: 'inventory',
    method: 'DELETE',
    path: '/inventory/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
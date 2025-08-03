module.exports = function PatchInventoryinventoryid(req, res) {
  res.send({
    command: 'PATCHInventoryinventoryid',
    resource: 'inventory',
    method: 'PATCH',
    path: '/inventory/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
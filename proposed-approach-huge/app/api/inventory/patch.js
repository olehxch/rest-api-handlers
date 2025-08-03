module.exports = function PatchInventoryinventory(req, res) {
  res.send({
    command: 'PATCHInventoryinventory',
    resource: 'inventory',
    method: 'PATCH',
    path: '/inventory',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
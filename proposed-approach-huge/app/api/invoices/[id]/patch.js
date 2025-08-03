module.exports = function PatchInvoicesinvoicesid(req, res) {
  res.send({
    command: 'PATCHInvoicesinvoicesid',
    resource: 'invoices',
    method: 'PATCH',
    path: '/invoices/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
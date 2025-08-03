module.exports = function PatchInvoicesinvoices(req, res) {
  res.send({
    command: 'PATCHInvoicesinvoices',
    resource: 'invoices',
    method: 'PATCH',
    path: '/invoices',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
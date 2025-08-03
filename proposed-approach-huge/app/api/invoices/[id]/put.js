module.exports = function PutInvoicesinvoicesid(req, res) {
  res.send({
    command: 'PUTInvoicesinvoicesid',
    resource: 'invoices',
    method: 'PUT',
    path: '/invoices/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
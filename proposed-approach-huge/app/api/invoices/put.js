module.exports = function PutInvoicesinvoices(req, res) {
  res.send({
    command: 'PUTInvoicesinvoices',
    resource: 'invoices',
    method: 'PUT',
    path: '/invoices',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
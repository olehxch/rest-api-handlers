module.exports = function DeleteInvoicesinvoices(req, res) {
  res.send({
    command: 'DELETEInvoicesinvoices',
    resource: 'invoices',
    method: 'DELETE',
    path: '/invoices',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
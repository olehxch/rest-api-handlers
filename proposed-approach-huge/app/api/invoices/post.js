module.exports = function PostInvoicesinvoices(req, res) {
  res.send({
    command: 'POSTInvoicesinvoices',
    resource: 'invoices',
    method: 'POST',
    path: '/invoices',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
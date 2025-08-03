module.exports = function PostInvoicesinvoicesid(req, res) {
  res.send({
    command: 'POSTInvoicesinvoicesid',
    resource: 'invoices',
    method: 'POST',
    path: '/invoices/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
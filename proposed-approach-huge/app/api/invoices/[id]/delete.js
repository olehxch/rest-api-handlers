module.exports = function DeleteInvoicesinvoicesid(req, res) {
  res.send({
    command: 'DELETEInvoicesinvoicesid',
    resource: 'invoices',
    method: 'DELETE',
    path: '/invoices/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
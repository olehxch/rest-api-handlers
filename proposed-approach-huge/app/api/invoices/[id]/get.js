module.exports = function GetInvoicesinvoicesid(req, res) {
  res.send({
    command: 'GETInvoicesinvoicesid',
    resource: 'invoices',
    method: 'GET',
    path: '/invoices/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
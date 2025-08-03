module.exports = function GetInvoicesinvoices(req, res) {
  res.send({
    command: 'GETInvoicesinvoices',
    resource: 'invoices',
    method: 'GET',
    path: '/invoices',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
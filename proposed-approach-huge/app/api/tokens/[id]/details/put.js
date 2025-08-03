module.exports = function PutTokenstokensiddetails(req, res) {
  res.send({
    command: 'PUTTokenstokensiddetails',
    resource: 'tokens',
    method: 'PUT',
    path: '/tokens/:id/details',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
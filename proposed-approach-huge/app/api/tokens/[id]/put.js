module.exports = function PutTokenstokensid(req, res) {
  res.send({
    command: 'PUTTokenstokensid',
    resource: 'tokens',
    method: 'PUT',
    path: '/tokens/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
module.exports = function PutTokenstokens(req, res) {
  res.send({
    command: 'PUTTokenstokens',
    resource: 'tokens',
    method: 'PUT',
    path: '/tokens',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
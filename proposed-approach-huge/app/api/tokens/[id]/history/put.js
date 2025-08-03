module.exports = function PutTokenstokensidhistory(req, res) {
  res.send({
    command: 'PUTTokenstokensidhistory',
    resource: 'tokens',
    method: 'PUT',
    path: '/tokens/:id/history',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
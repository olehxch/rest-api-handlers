module.exports = function PutOpportunitiesopportunitiesid(req, res) {
  res.send({
    command: 'PUTOpportunitiesopportunitiesid',
    resource: 'opportunities',
    method: 'PUT',
    path: '/opportunities/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
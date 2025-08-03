module.exports = function PutOpportunitiesopportunities(req, res) {
  res.send({
    command: 'PUTOpportunitiesopportunities',
    resource: 'opportunities',
    method: 'PUT',
    path: '/opportunities',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
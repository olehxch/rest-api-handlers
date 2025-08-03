module.exports = function PatchOpportunitiesopportunities(req, res) {
  res.send({
    command: 'PATCHOpportunitiesopportunities',
    resource: 'opportunities',
    method: 'PATCH',
    path: '/opportunities',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
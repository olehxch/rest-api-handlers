module.exports = function PatchOpportunitiesopportunitiesid(req, res) {
  res.send({
    command: 'PATCHOpportunitiesopportunitiesid',
    resource: 'opportunities',
    method: 'PATCH',
    path: '/opportunities/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
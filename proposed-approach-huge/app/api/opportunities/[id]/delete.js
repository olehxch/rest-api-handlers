module.exports = function DeleteOpportunitiesopportunitiesid(req, res) {
  res.send({
    command: 'DELETEOpportunitiesopportunitiesid',
    resource: 'opportunities',
    method: 'DELETE',
    path: '/opportunities/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
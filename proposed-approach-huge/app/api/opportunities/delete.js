module.exports = function DeleteOpportunitiesopportunities(req, res) {
  res.send({
    command: 'DELETEOpportunitiesopportunities',
    resource: 'opportunities',
    method: 'DELETE',
    path: '/opportunities',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
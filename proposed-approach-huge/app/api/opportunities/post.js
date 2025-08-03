module.exports = function PostOpportunitiesopportunities(req, res) {
  res.send({
    command: 'POSTOpportunitiesopportunities',
    resource: 'opportunities',
    method: 'POST',
    path: '/opportunities',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
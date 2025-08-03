module.exports = function GetOpportunitiesopportunities(req, res) {
  res.send({
    command: 'GETOpportunitiesopportunities',
    resource: 'opportunities',
    method: 'GET',
    path: '/opportunities',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
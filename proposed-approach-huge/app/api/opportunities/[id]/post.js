module.exports = function PostOpportunitiesopportunitiesid(req, res) {
  res.send({
    command: 'POSTOpportunitiesopportunitiesid',
    resource: 'opportunities',
    method: 'POST',
    path: '/opportunities/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
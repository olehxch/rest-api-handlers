module.exports = function GetEventseventsiddetails(req, res) {
  res.send({
    command: 'GETEventseventsiddetails',
    resource: 'events',
    method: 'GET',
    path: '/events/:id/details',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
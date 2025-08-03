module.exports = function PutEventseventsiddetails(req, res) {
  res.send({
    command: 'PUTEventseventsiddetails',
    resource: 'events',
    method: 'PUT',
    path: '/events/:id/details',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
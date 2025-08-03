module.exports = function GetEventseventsid(req, res) {
  res.send({
    command: 'GETEventseventsid',
    resource: 'events',
    method: 'GET',
    path: '/events/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
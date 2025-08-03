module.exports = function GetEventsevents(req, res) {
  res.send({
    command: 'GETEventsevents',
    resource: 'events',
    method: 'GET',
    path: '/events',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
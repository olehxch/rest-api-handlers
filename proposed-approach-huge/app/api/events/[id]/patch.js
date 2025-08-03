module.exports = function PatchEventseventsid(req, res) {
  res.send({
    command: 'PATCHEventseventsid',
    resource: 'events',
    method: 'PATCH',
    path: '/events/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
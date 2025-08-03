module.exports = function DeleteEventseventsid(req, res) {
  res.send({
    command: 'DELETEEventseventsid',
    resource: 'events',
    method: 'DELETE',
    path: '/events/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
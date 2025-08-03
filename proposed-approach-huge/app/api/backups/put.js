module.exports = function PutBackupsbackups(req, res) {
  res.send({
    command: 'PUTBackupsbackups',
    resource: 'backups',
    method: 'PUT',
    path: '/backups',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
module.exports = function PatchBackupsbackups(req, res) {
  res.send({
    command: 'PATCHBackupsbackups',
    resource: 'backups',
    method: 'PATCH',
    path: '/backups',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
module.exports = function PutCampaignscampaignsid(req, res) {
  res.send({
    command: 'PUTCampaignscampaignsid',
    resource: 'campaigns',
    method: 'PUT',
    path: '/campaigns/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
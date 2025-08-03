module.exports = function PatchCampaignscampaignsid(req, res) {
  res.send({
    command: 'PATCHCampaignscampaignsid',
    resource: 'campaigns',
    method: 'PATCH',
    path: '/campaigns/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
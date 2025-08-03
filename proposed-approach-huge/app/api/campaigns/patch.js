module.exports = function PatchCampaignscampaigns(req, res) {
  res.send({
    command: 'PATCHCampaignscampaigns',
    resource: 'campaigns',
    method: 'PATCH',
    path: '/campaigns',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
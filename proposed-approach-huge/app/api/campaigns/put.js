module.exports = function PutCampaignscampaigns(req, res) {
  res.send({
    command: 'PUTCampaignscampaigns',
    resource: 'campaigns',
    method: 'PUT',
    path: '/campaigns',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
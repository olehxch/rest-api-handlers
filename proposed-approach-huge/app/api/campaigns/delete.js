module.exports = function DeleteCampaignscampaigns(req, res) {
  res.send({
    command: 'DELETECampaignscampaigns',
    resource: 'campaigns',
    method: 'DELETE',
    path: '/campaigns',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
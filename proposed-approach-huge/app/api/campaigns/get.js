module.exports = function GetCampaignscampaigns(req, res) {
  res.send({
    command: 'GETCampaignscampaigns',
    resource: 'campaigns',
    method: 'GET',
    path: '/campaigns',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
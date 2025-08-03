module.exports = function PostCampaignscampaigns(req, res) {
  res.send({
    command: 'POSTCampaignscampaigns',
    resource: 'campaigns',
    method: 'POST',
    path: '/campaigns',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
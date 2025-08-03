module.exports = function PostCampaignscampaignsid(req, res) {
  res.send({
    command: 'POSTCampaignscampaignsid',
    resource: 'campaigns',
    method: 'POST',
    path: '/campaigns/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
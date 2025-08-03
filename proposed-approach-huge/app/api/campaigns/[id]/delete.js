module.exports = function DeleteCampaignscampaignsid(req, res) {
  res.send({
    command: 'DELETECampaignscampaignsid',
    resource: 'campaigns',
    method: 'DELETE',
    path: '/campaigns/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
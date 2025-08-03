module.exports = function GetCampaignscampaignsid(req, res) {
  res.send({
    command: 'GETCampaignscampaignsid',
    resource: 'campaigns',
    method: 'GET',
    path: '/campaigns/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};
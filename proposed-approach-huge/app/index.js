const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Start timing the overall startup process
const startupStartTime = process.hrtime.bigint();

app.use(bodyParser.json({ type: 'application/json' }));
app.use(bodyParser.urlencoded({ extended: true }));

const improvedRouter = require('./improved-router');

// Time the improved router initialization
const routerStartTime = process.hrtime.bigint();
app.use(improvedRouter.getRoutes('./api'));
const routerEndTime = process.hrtime.bigint();

// Calculate router initialization time
const routerTimeMs = Number(routerEndTime - routerStartTime) / 1000000;

app.listen(port, () => {
  const startupEndTime = process.hrtime.bigint();
  const startupTimeMs = Number(startupEndTime - startupStartTime) / 1000000;
  
  console.log(`Server startup completed!`);
  console.log(`- Improved Router initialization: ${routerTimeMs.toFixed(2)}ms`);
  console.log(`- Total startup time: ${startupTimeMs.toFixed(2)}ms`);
  console.log(`- Server listening on port ${port}`);
});

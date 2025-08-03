const fs = require('fs');
const path = require('path');

// Resource types to generate routes for
const resourceTypes = [
  'users', 'products', 'orders', 'customers', 'inventory', 'payments', 'shipping',
  'categories', 'reviews', 'ratings', 'notifications', 'messages', 'files',
  'documents', 'reports', 'analytics', 'logs', 'events', 'sessions', 'tokens',
  'permissions', 'roles', 'groups', 'teams', 'projects', 'tasks', 'comments',
  'attachments', 'versions', 'backups', 'exports', 'imports', 'templates',
  'workflows', 'approvals', 'audits', 'metrics', 'dashboards', 'widgets',
  'integrations', 'webhooks', 'subscriptions', 'billing', 'invoices', 'receipts',
  'refunds', 'discounts', 'coupons', 'promotions', 'campaigns', 'marketing',
  'leads', 'opportunities', 'deals', 'contacts', 'companies', 'organizations',
  'departments', 'employees', 'profiles', 'preferences', 'settings', 'configurations'
];

// HTTP methods
const methods = ['get', 'post', 'put', 'patch', 'delete'];

// Route template function
function createRouteHandler(resourceType, method, routePath) {
  return `module.exports = function ${method.charAt(0).toUpperCase() + method.slice(1)}${resourceType.charAt(0).toUpperCase() + resourceType.slice(1)}${routePath.replace(/[^a-zA-Z0-9]/g, '')}(req, res) {
  res.send({
    command: '${method.toUpperCase()}${resourceType.charAt(0).toUpperCase() + resourceType.slice(1)}${routePath.replace(/[^a-zA-Z0-9]/g, '')}',
    resource: '${resourceType}',
    method: '${method.toUpperCase()}',
    path: '${routePath}',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};`;
}

// Generate routes
let routeCount = 0;
const apiDir = path.join(__dirname, 'app', 'api');

// Create base API directory if it doesn't exist
if (!fs.existsSync(apiDir)) {
  fs.mkdirSync(apiDir, { recursive: true });
}

// Generate routes for each resource type
resourceTypes.forEach((resourceType, index) => {
  const resourceDir = path.join(apiDir, resourceType);
  
  // Create resource directory
  if (!fs.existsSync(resourceDir)) {
    fs.mkdirSync(resourceDir, { recursive: true });
  }
  
  // Generate basic CRUD routes
  methods.forEach(method => {
    const routeFile = path.join(resourceDir, `${method}.js`);
    const handler = createRouteHandler(resourceType, method, `/${resourceType}`);
    
    fs.writeFileSync(routeFile, handler);
    routeCount++;
    console.log(`Created: ${routeFile}`);
  });
  
  // Generate routes with ID parameter
  const idDir = path.join(resourceDir, '[id]');
  if (!fs.existsSync(idDir)) {
    fs.mkdirSync(idDir, { recursive: true });
  }
  
  methods.forEach(method => {
    const routeFile = path.join(idDir, `${method}.js`);
    const handler = createRouteHandler(resourceType, method, `/${resourceType}/:id`);
    
    fs.writeFileSync(routeFile, handler);
    routeCount++;
    console.log(`Created: ${routeFile}`);
  });
  
  // Generate nested routes for some resources
  if (index < 20) { // Only for first 20 resource types to avoid too many routes
    const nestedTypes = ['details', 'history', 'analytics', 'reports', 'logs'];
    
    nestedTypes.forEach(nestedType => {
      const nestedDir = path.join(idDir, nestedType);
      if (!fs.existsSync(nestedDir)) {
        fs.mkdirSync(nestedDir, { recursive: true });
      }
      
      methods.slice(0, 3).forEach(method => { // Only GET, POST, PUT for nested routes
        const routeFile = path.join(nestedDir, `${method}.js`);
        const handler = createRouteHandler(resourceType, method, `/${resourceType}/:id/${nestedType}`);
        
        fs.writeFileSync(routeFile, handler);
        routeCount++;
        console.log(`Created: ${routeFile}`);
      });
    });
  }
});

// Generate some additional specialized routes
const specializedRoutes = [
  { path: 'search', method: 'get' },
  { path: 'bulk', method: 'post' },
  { path: 'batch', method: 'put' },
  { path: 'export', method: 'get' },
  { path: 'import', method: 'post' },
  { path: 'validate', method: 'post' },
  { path: 'duplicate', method: 'post' },
  { path: 'archive', method: 'patch' },
  { path: 'restore', method: 'patch' },
  { path: 'status', method: 'get' }
];

// Add specialized routes to first 10 resource types
resourceTypes.slice(0, 10).forEach(resourceType => {
  specializedRoutes.forEach(route => {
    const routeFile = path.join(apiDir, resourceType, `${route.method}.js`);
    const handler = createRouteHandler(resourceType, route.method, `/${resourceType}/${route.path}`);
    
    // Only create if it doesn't exist (to avoid overwriting basic CRUD routes)
    if (!fs.existsSync(routeFile)) {
      fs.writeFileSync(routeFile, handler);
      routeCount++;
      console.log(`Created: ${routeFile}`);
    }
  });
});

console.log(`\nTotal routes generated: ${routeCount}`);
console.log('Routes generation completed!'); 
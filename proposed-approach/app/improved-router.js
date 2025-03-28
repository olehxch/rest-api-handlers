const fs = require('fs');
const path = require('path');
const router = require('express').Router({ mergeParams: true });

class APIRouter {
  init(rootDir) {
    this.rootDir = path.join(__dirname, rootDir);
    this.routes = [];
    this.files = [];
  }

  getRoutes(rootDir) {
    if (!rootDir) throw new Error('Root directory is required');
    if (typeof rootDir !== 'string') {
      throw new Error('Root directory must be a string');
    }
    if (rootDir) this.init(rootDir);

    this.traverseDirectory(this.rootDir, this.files);
    this.routes = this.files.map((file) => this.toApiRoute(file));
    this.addRoutesToRouter(this.routes);
    this.logRoutes();

    return router;
  }

  logRoutes() {
    const tableData = this.routes.map((route) => ({
      METHOD: route.method.toUpperCase(),
      HANDLER: route.handler.name,
      PATH: route.path,
    }));

    console.log('< API ROUTES >');
    console.table([...tableData]);
  }

  addRoutesToRouter(routes) {
    routes.forEach((route) => {
      router[route.method](route.path, route.handler);
    });
  }

  toApiRoute(filePath) {
    const file = this.trimToRelativePath(filePath)
    const handler = require(filePath);

    return {
      method: this.getMethodFromFileName(file),
      path: this.getPathFromFileName(file),
      name : handler?.name || 'anonymous',
      handler,
    }
  }

  trimToRelativePath(filePath) {
    return filePath.replace(this.rootDir, '.').replace('./', '/');
  }

  replaceParams(str) {
    const regex = /\[(\w+)\]/g;
    const replacedStr = str.replace(regex, ':$1');

    return replacedStr;
  }

  getPathFromFileName(fileName) {
    const partial = fileName.split('/');
    let path = partial.slice(0, partial.length - 1).join('/');
    if (path === '') { path = '/'; }

    return this.replaceParams(path);
  }

  getMethodFromFileName(fileName) {
    const partial = fileName.split('/');
    const method = partial[partial.length - 1].split('.')[0];

    return method.toLowerCase();
  }

  traverseDirectory(directoryPath, routes) {
    const files = fs.readdirSync(directoryPath);

    files.forEach((file) => {
      const filePath = path.join(directoryPath, file);

      if (fs.statSync(filePath).isDirectory()) {
        this.traverseDirectory(filePath, routes);
      } else {
        if (this.ignoreFile(file)) return;

        routes.push(filePath);
      }
    });
  }

  ignoreFile(filePath) {
    const ignoreFiles = [
      'index.js', 'package.json', 
      'package-lock.json', 
      'README.md', '.DS_Store'];

    return ignoreFiles.includes(filePath);
  }
}

module.exports = new APIRouter();

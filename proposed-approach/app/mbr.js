const fs = require('fs');
const path = require('path');
const router = require('express').Router({ mergeParams: true });

class FolderFileParser {
  init(rootDir) {
    this.rootDir = path.join(__dirname, rootDir);
    this.routes = [];
  }

  getRoutes(rootDir) {
    if (!rootDir) throw new Error('Root directory is required');
    if (typeof rootDir !== 'string') throw new Error('Root directory must be a string');
    if (rootDir) this.init(rootDir);

    const files = [];

    this.traverseDirectory(this.rootDir, files);
    this.routes = files.map((file) => this.toApiRoute(file));
    this.addRoutesToRouter(this.routes);

    this.logRoutes();

    return router;
  }

  logRoutes() {
    const header = `${'METHOD'.padEnd(7)} | ${'HANDLER'.padEnd(30)} | ${'PATH'.padEnd(30)}`;
    const line = '-'.repeat(header.length);
    const mapped = this.routes.map(r => `${r.method.toUpperCase().padEnd(7)} | ${r.handler.name.padEnd(30)} | ${r.path.padEnd(30)}`).join('\n');

    console.log('< API ROUTES >');
    console.log(header);
    console.log(line);
    console.log(mapped);
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
      handler
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
    const path = partial.slice(0, partial.length - 1).join('/');

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
    const ignoreFiles = ['index.js', 'package.json', 'package-lock.json', 'README.md', '.DS_Store'];

    return ignoreFiles.includes(filePath);
  }
}

module.exports = new FolderFileParser();

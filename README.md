# Enhancing REST API Handlers Organization for Node.js Microservices

## Introduction

This repository contains source code for the research titled "Enhancing REST API Handlers Organization for Node.js Microservices."

## Files
### Project Structure

The project structure contains:

* **[api-testing](https://github.com/olehxch/rest-api-handlers/tree/master/api-testing)** - this folder contains the source code of the application to test API routes and their performance
* **[assets](https://github.com/olehxch/rest-api-handlers/tree/master/assets)** - folder with additional images and files
* **[frameworks](https://github.com/olehxch/rest-api-handlers/tree/master/frameworks)** - this folder contains the source code of the five services with their native routing methods implemented for comparison purposes (Express.js, Koa, Hapi.js, Next.js, Nest.js)
* **[proposed-approach](https://github.com/olehxch/rest-api-handlers/tree/master/proposed-approach)** - this folder contains the source code of the proposed approach described in the research paper

### How to run an author's proposed approach

Open terminal in the folder `/proposed-approach` folder and run `npm start`. After a successful start a text `Server listening on port 3000` should appear in the console. 

### How to run a Express.js native routing approach

Open terminal in the folder `/frameworks/express` folder and run `npm start`. After a successful start a text `Server listening on port 3000` should appear in the console. 

### How to run a Koa native routing approach

Open terminal in the folder `/frameworks/koa` folder and run `npm start`. Application will wait for the network requests C and no logs expected.

### How to run a Hapi.js native routing approach

Open terminal in the folder `/frameworks/hapi` folder and run `npm start`. After a successful start a text `Server running on http://localhost:3000` shosuld appear in the console.

### How to run a Nest.js native routing approach

Open terminal in the folder `/frameworks/nest` folder and run `npm start`. After a successful start a full log with initialized routes should appear in the console. 

### How to run a Next.js native routing approach

Open terminal in the folder `/frameworks/next` folder. To run a production build execute `npm start`. To run a development build run `npm run dev`. After a successful start a text `Ready in 297ms` should appear in the console. 

### How to test all approaches

Open terminal in the folder `/api-testing` folder and run `npm test` while.

All servers use the same port - `3000`. Please be aware that you need to start one server at a time, test it, and close. Then you can open next server and test it. 

## Implemented REST API

| METHOD | HANDLER                     | PATH                          |
|--------|-----------------------------|-------------------------------|
| DELETE | DeleteSatellite             | /satellites/:id               |
| GET    | GetSatelliteSpecificDetail  | /satellites/:id/details/:detailId |
| GET    | GetSatelliteDetails         | /satellites/:id/details       |
| GET    | GetSatellite                | /satellites/:id               |
| PATCH  | PartialUpdateSatellite      | /satellites/:id               |
| PUT    | UpdateSatellite             | /satellites/:id               |
| GET    | ListSatellites              | /satellites                   |
| POST   | AddSatellite                | /satellites                   |

## Results evaluation

| Framework | Files | Lines of code | Folder Size (MB) | Performance (ms) | Explicit route mapping | Files changed for adding a new route |
|-----------|-------|---------------|------------------|------------------|------------------------|--------------------------------------|
| Proposed Approach | 10 | 153 | 229.7 MB | 34.10ms | No | 1 (new route controller) |
| Express.js | 14 | 96 | 229.7 MB | 38.97ms | Yes | 1 (new route controller)<br>1 (root router)<br>N (index.js files inside folders) |
| Koa | 14 | 93 | 230.8 MB | 38.12ms | Yes | 1 (new route controller)<br>1 (root router)<br>N (index.js files inside folders) |
| Hapi.js | 10 | 96 | 2.1 MB | 37.20ms | Yes | 1 (new route controller)<br>1 (root router)<br>N (index.js files inside folders) |
| Nest.js | 10 | 140 | 298 MB | 41.82ms | Yes | 1 (new route controller)<br>1 (root router)<br>N (index.js files inside folders) |
| Next.js | 8 | 461 | 451 MB | 38.66ms | Yes | 1 (new route controller) |

## Dependency Graphs

*Dependency graph for the proposed routing approach:*
![Dependency graph for the proposed routing approach](/assets/depgraph-proposed-approach.png)

*Dependency graph for the application based on the Express.js framework:*
![Dependency graph for the application based on the Express.js framework](/assets/depgraph-express.png)

*Dependency graph for the application based on the Koa framework:*
![Dependency graph for the application based on the Koa framework](/assets/depgraph-koa.png)

*Dependency graph for the application based on the Hapi.js framework:*
![Dependency graph for the application based on the Hapi.js framework](/assets/depgraph-hapi.png)

*Dependency graph for the application based on the Nest.js framework:*
![Dependency graph for the application based on the Nest.js framework](/assets/depgraph-nest.png)

*Dependency graph for the application based on the Next.js framework:*
![Dependency graph for the application based on the Next.js framework](/assets//depgraph-next.png)

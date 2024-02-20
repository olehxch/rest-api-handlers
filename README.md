## Organizing APIs With File-Path-Method Routing for RESTful Node.js Microservices

### Introduction

This repository contains source code for the research titled "Organizing APIs With File-Path-Method Routing for RESTful Node.js Microservices".

### Files

The project structure contains:

* **api-testing** - this folder contains the source code of the application to test API routes and their performance
* **assets** - folder with additional images and files
* **frameworks** - this folder contains the source code of the five services with their native routing methods implemented for comparison purposes (Express.js, Koa, Hapi.js, Next.js, Nest.js)
* **proposed-approach** - this folder contains the source code of the proposed approach described in the research paper

### Implemented REST API

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

### Results evaluation

| Framework | Files | Lines of code | Folder Size (MB) | Performance (ms) | Explicit route mapping | Files changed for adding a new route |
|-----------|-------|---------------|------------------|------------------|------------------------|--------------------------------------|
| Proposed Approach | 10 | 153 | 229.7 MB | 34.10ms | No | 1 (new route controller) |
| Express.js | 14 | 96 | 229.7 MB | 38.97ms | Yes | 1 (new route controller)<br>1 (root router)<br>N (index.js files inside folders) |
| Koa | 14 | 93 | 230.8 MB | 38.12ms | Yes | 1 (new route controller)<br>1 (root router)<br>N (index.js files inside folders) |
| Hapi.js | 10 | 96 | 2.1 MB | 37.20ms | Yes | 1 (new route controller)<br>1 (root router)<br>N (index.js files inside folders) |
| Nest.js | 10 | 140 | 298 MB | 41.82ms | Yes | 1 (new route controller)<br>1 (root router)<br>N (index.js files inside folders) |
| Next.js | 8 | 461 | 451 MB | 38.66ms | Yes | 1 (new route controller) |

### Dependency Graphs

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
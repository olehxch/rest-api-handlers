# Enhancing REST API Handlers Organization for Node.js Microservices

## Introduction

This repository contains source code for the research titled ["Enhancing REST API Handlers Organization for Node.js Microservices."](https://link.springer.com/article/10.1007/s42979-025-04311-8)

## Project Structure

The project structure contains:

- **[assets](./assets)** - Folder with additional images and files
- **[frameworks](./frameworks)** - This folder contains the source code of the five services with their native routing methods implemented for comparison purposes (Express.js, Koa, Hapi.js, Next.js, Nest.js)
- **[proposed-approach](./proposed-approach)** - This folder contains the source code of the proposed approach described in the research paper
- **[proposed-approach-huge](./proposed-approach-huge)** - This folder contains the source code of the proposed approach described in the research paper with 938 API handlers for performance testing

## How to run approaches
### How to run an author's proposed approach

Open terminal in the folder `/proposed-approach` folder and run `npm start`. After a successful start a text `Server listening on port 3000` should appear in the console. 

### How to run a Express.js native routing approach

Open terminal in the folder `/frameworks/express` folder and run `npm start`. After a successful start a text `Server listening on port 3000` should appear in the console. 

### How to run a Koa native routing approach

Open terminal in the folder `/frameworks/koa` folder and run `npm start`. Application will wait for the network requests and no logs expected.

### How to run a Hapi.js native routing approach

Open terminal in the folder `/frameworks/hapi` folder and run `npm start`. After a successful start a text `Server running on http://localhost:3000` shosuld appear in the console.

### How to run a Nest.js native routing approach

Open terminal in the folder `/frameworks/nest` folder and run `npm start`. After a successful start a full log with initialized routes should appear in the console. 

### How to run a Next.js native routing approach

Open terminal in the folder `/frameworks/next` folder. To run a production build execute `npm start`. To run a development build run `npm run dev`. After a successful start a text `Ready in 297ms` should appear in the console. 

## Implemented REST API

| Method | Handler                     | Path                          |
|--------|-----------------------------|-------------------------------|
| DELETE | DeleteSatellite             | `/satellites/:id`             |
| GET    | GetSatelliteSpecificDetail  | `/satellites/:id/details/:detailId` |
| GET    | GetSatelliteDetails         | `/satellites/:id/details`     |
| GET    | GetSatellite                | `/satellites/:id`             |
| PATCH  | PartialUpdateSatellite      | `/satellites/:id`             |
| PUT    | UpdateSatellite             | `/satellites/:id`             |
| GET    | ListSatellites              | `/satellites`                 |
| POST   | AddSatellite                | `/satellites`                 |

## Testing

### Code Complexity

1. Open terminal in the root folder
2. Run the [code_complexity.sh](./code_complexity.sh) file

This file will generate code complexity metrics for each approach. Two files will be generated: `code_complexity.html` and `code_complexity.txt` in the root folders of each framework and approach. Please check `code_complexity.txt` for detailed descriptions.

| Framework        | Average Code Complexity | Explicit Route Mapping | Root Router | New Route Controllers | index.js Files Inside Folders |
|------------------|-------------------------|-------------------------|-------------|------------------------|-------------------------------|
| Proposed Approach | 1.0                     | No                      | 0           | 1                      | 0                             |
| Express.js        | 1.0                     | Yes                     | 1           | 1                      | N                             |
| Koa               | 1.0                     | Yes                     | 1           | 1                      | N                             |
| Hapi.js           | 1.0                     | Yes                     | 1           | 1                      | N                             |
| Nest.js           | 1.0                     | Yes                     | 1           | 1                      | N                             |
| Next.js           | 1.1                     | Yes                     | 0           | 1                      | 0                             |

### Performance Evaluation

1. Install Python dependencies using [uv](https://docs.astral.sh/uv/) package manager by running command `uv sync`
2. Open one of the frameworks or proposed approach and start the service by running the command `npm start`. It should start the service at `localhost:3000`
3. Open terminal in the root folder and run [load_testing.sh](./load_testing.sh) to start load testing – `uv run load_testing.sh`
4. Open UI available at `http://0.0.0.0:8089` and start the load testing
5. Use UI navigation to gather additional metrics and review the results

| Framework         | Requests | Fails | Latency, ms (p50) | Latency, ms (p95) | Latency, ms (p99) | Average, ms | Current RPS |
|------------------|----------|-------|-------------------|-------------------|-------------------|-------------|--------------|
| Proposed Approach| 1,125,540| 3,836 | 180               | 1000              | 1300              | 388.56      | 5925.1       |
| Express.js       | 1,266,208| 1,658 | 130               | 770               | 990               | 262.4       | 7458.3       |
| Koa              | 1,825,937| 0     | 0.07              | 110               | 170               | 16.85       | 13474.8      |
| Hapi.js          | 1,809,789| 0     | 1                 | 120               | 200               | 21.91       | 13590.6      |
| Nest.js          | 1,029,060| 5,509 | 190               | 1200              | 1500              | 462.12      | 4940.4       |
| Next.js          | 493,536  | 37,355| 620               | 16000             | 16000             | 1732.52     | 2457.7       |

### Comparison of CPU and Memory Usage Results

| Framework         | CPU (avg) % | CPU (max) % | Memory (avg) % | Memory (max) % |
|------------------|-------------|-------------|----------------|----------------|
| Proposed Approach| 37.05       | 50.70       | 61.28          | 62.90          |
| Express.js       | 39.16       | 58.60       | 61.02          | 62.40          |
| Koa              | 36.91       | 75.10       | 61.23          | 63.30          |
| Hapi.js          | 36.84       | 53.70       | 62.54          | 63.10          |
| Nest.js          | 37.87       | 55.60       | 61.80          | 63.30          |
| Next.js          | 38.98       | 51.30       | 62.20          | 63.20          |

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

## Citation

[Link to citation on Springer](https://link.springer.com/article/10.1007/s42979-025-04311-8#citeas)

```
Chaplia, O., Klym, H., Konuhova, M. et al. Enhancing REST API Handlers Organization for Node.js Microservices. SN COMPUT. SCI. 6, 776 (2025). https://doi.org/10.1007/s42979-025-04311-8
```

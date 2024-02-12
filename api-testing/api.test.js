const { describe, it } = require('node:test');
const assert = require('assert');
const axios = require('axios');

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 15000,
});

function convertOkResponse(statusCode) {
  if (statusCode === 201) {
    statusCode = 200;
  }

  return statusCode;
}

describe('Satellites REST API', () => {
  // Test cases for GET /satellites
  describe('GET /satellites', () => {
    it('should return status 200', () => {
      return axiosInstance.get('/satellites')
        .then(response => {
          assert.strictEqual(convertOkResponse(response.status), 200);
          // Add more assertions for the response data if needed
        });
    });
  });

  // Test cases for POST /satellites
  describe('POST /satellites', () => {
    it('should return status 200', () => {
      return axiosInstance.post('/satellites')
        .then(response => {
          assert.strictEqual(convertOkResponse(response.status), 200);
          // Add more assertions for the response data if needed
        });
    });
  });

  // Test cases for GET /satellites/123
  describe('GET /satellites/123', () => {
    it('should return status 200', () => {
      return axiosInstance.get('/satellites/123')
        .then(response => {
          assert.strictEqual(convertOkResponse(response.status), 200);
          // Add more assertions for the response data if needed
        });
    });
  });

  // Test cases for PUT /satellites/123
  describe('PUT /satellites/123', () => {
    it('should return status 200', () => {
      return axiosInstance.put('/satellites/123')
        .then(response => {
          assert.strictEqual(convertOkResponse(response.status), 200);
          // Add more assertions for the response data if needed
        });
    });
  });

  // Test cases for DELETE /satellites/123
  describe('DELETE /satellites/123', () => {
    it('should return status 200', () => {
      return axiosInstance.delete('/satellites/123')
        .then(response => {
          assert.strictEqual(convertOkResponse(response.status), 200);
          // Add more assertions for the response data if needed
        });
    });
  });

  // Test cases for GET /satellites/123/details
  describe('GET /satellites/123/details', () => {
    it('should return status 200', () => {
      return axiosInstance.get('/satellites/123/details')
        .then(response => {
          assert.strictEqual(convertOkResponse(response.status), 200);
          // Add more assertions for the response data if needed
        });
    });
  });

  // Test cases for GET /satellites/123/details/456
  describe('GET /satellites/123/details/456', () => {
    it('should return status 200', () => {
      return axiosInstance.get('/satellites/123/details/456')
        .then(response => {
          assert.strictEqual(convertOkResponse(response.status), 200);
          // Add more assertions for the response data if needed
        });
    });
  });
});

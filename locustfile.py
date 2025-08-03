#!/usr/bin/env python3
"""
Comprehensive Load Testing Script for REST API Handlers Performance Evaluation

This script implements realistic load testing scenarios to evaluate the performance
of different Node.js frameworks (Express, Koa, Hapi, Nest, Next) and the proposed approach.
"""

import random
import json
import time
from locust import HttpUser, task, between, events, FastHttpUser
import psutil
import os
import threading
import statistics

# Global variables for monitoring
cpu_usage = []
memory_usage = []
monitoring_active = False


def start_system_monitoring():
    """Start monitoring CPU and memory usage in a separate thread"""
    global monitoring_active, cpu_usage, memory_usage

    monitoring_active = True
    cpu_usage = []
    memory_usage = []

    def monitor():
        while monitoring_active:
            try:
                # Get CPU usage
                cpu_percent = psutil.cpu_percent(interval=1)
                cpu_usage.append(cpu_percent)

                # Get memory usage
                memory = psutil.virtual_memory()
                memory_usage.append(memory.percent)

                time.sleep(1)
            except Exception as e:
                print(f"Monitoring error: {e}")
                break

    monitor_thread = threading.Thread(target=monitor, daemon=True)
    monitor_thread.start()


def stop_system_monitoring():
    """Stop system monitoring and return collected data"""
    global monitoring_active
    monitoring_active = False
    time.sleep(2)  # Allow monitoring thread to finish

    return {
        'cpu_usage': cpu_usage,
        'memory_usage': memory_usage,
        'avg_cpu': statistics.mean(cpu_usage) if cpu_usage else 0,
        'avg_memory': statistics.mean(memory_usage) if memory_usage else 0,
        'max_cpu': max(cpu_usage) if cpu_usage else 0,
        'max_memory': max(memory_usage) if memory_usage else 0
    }


# Sample satellite data for realistic testing
SATELLITE_DATA = {
    "name": "Test Satellite",
    "orbit": "LEO",
    "status": "active",
    "launch_date": "2023-01-01",
    "mass": 1000,
    "power": "solar"
}

SATELLITE_UPDATE_DATA = {
    "name": "Updated Satellite",
    "status": "maintenance",
    "power": "battery"
}


class SatelliteAPIUser(FastHttpUser):
    """
    Locust user class that simulates realistic API usage patterns
    """
    wait_time = between(1, 3)  # Wait 1-3 seconds between requests

    def on_start(self):
        """Initialize user session"""
        self.satellite_ids = []
        self.detail_ids = []

        # Create some test data for the session
        for i in range(5):
            self.satellite_ids.append(f"sat_{random.randint(1000, 9999)}")
            self.detail_ids.append(f"detail_{random.randint(100, 999)}")

    @task(3)  # Higher weight for read operations
    def get_satellites_list(self):
        """GET /satellites - List all satellites"""
        with self.client.get("/satellites", catch_response=True) as response:
            if response.status_code == 200:
                response.success()
            else:
                response.failure(f"Expected 200, got {response.status_code}")

    @task(2)
    def get_specific_satellite(self):
        """GET /satellites/:id - Get specific satellite"""
        satellite_id = random.choice(self.satellite_ids) if self.satellite_ids else "123"
        with self.client.get(f"/satellites/{satellite_id}", catch_response=True) as response:
            if response.status_code == 200:
                response.success()
            else:
                response.failure(f"Expected 200, got {response.status_code}")

    @task(2)
    def get_satellite_details(self):
        """GET /satellites/:id/details - Get satellite details"""
        satellite_id = random.choice(self.satellite_ids) if self.satellite_ids else "123"
        with self.client.get(f"/satellites/{satellite_id}/details", catch_response=True) as response:
            if response.status_code == 200:
                response.success()
            else:
                response.failure(f"Expected 200, got {response.status_code}")

    @task(1)
    def get_specific_detail(self):
        """GET /satellites/:id/details/:detailId - Get specific detail"""
        satellite_id = random.choice(self.satellite_ids) if self.satellite_ids else "123"
        detail_id = random.choice(self.detail_ids) if self.detail_ids else "456"
        with self.client.get(f"/satellites/{satellite_id}/details/{detail_id}", catch_response=True) as response:
            if response.status_code == 200:
                response.success()
            else:
                response.failure(f"Expected 200, got {response.status_code}")

    @task(1)  # Lower weight for write operations
    def create_satellite(self):
        """POST /satellites - Create new satellite"""
        headers = {"Content-Type": "application/json"}
        with self.client.post("/satellites",
                              json=SATELLITE_DATA,
                              headers=headers,
                              catch_response=True) as response:
            if response.status_code in [200, 201]:
                response.success()
            else:
                response.failure(f"Expected 200/201, got {response.status_code}")

    @task(1)
    def update_satellite(self):
        """PUT /satellites/:id - Update satellite"""
        satellite_id = random.choice(self.satellite_ids) if self.satellite_ids else "123"
        headers = {"Content-Type": "application/json"}
        with self.client.put(f"/satellites/{satellite_id}",
                             json=SATELLITE_UPDATE_DATA,
                             headers=headers,
                             catch_response=True) as response:
            if response.status_code == 200:
                response.success()
            else:
                response.failure(f"Expected 200, got {response.status_code}")

    @task(1)
    def patch_satellite(self):
        """PATCH /satellites/:id - Partial update satellite"""
        satellite_id = random.choice(self.satellite_ids) if self.satellite_ids else "123"
        headers = {"Content-Type": "application/json"}
        patch_data = {"status": "maintenance"}
        with self.client.patch(f"/satellites/{satellite_id}",
                               json=patch_data,
                               headers=headers,
                               catch_response=True) as response:
            if response.status_code == 200:
                response.success()
            else:
                response.failure(f"Expected 200, got {response.status_code}")

    @task(1)
    def delete_satellite(self):
        """DELETE /satellites/:id - Delete satellite"""
        satellite_id = random.choice(self.satellite_ids) if self.satellite_ids else "123"
        with self.client.delete(f"/satellites/{satellite_id}", catch_response=True) as response:
            if response.status_code == 200:
                response.success()
            else:
                response.failure(f"Expected 200, got {response.status_code}")


class HighLoadUser(SatelliteAPIUser):
    """
    User class for high-load scenarios with minimal wait time
    """
    wait_time = between(0.1, 0.5)  # Very short wait time for high load


class BurstLoadUser(SatelliteAPIUser):
    """
    User class for burst load scenarios
    """
    wait_time = between(0.5, 2)  # Moderate wait time with occasional bursts

# Event handlers for test lifecycle


@events.test_start.add_listener
def on_test_start(environment, **kwargs):
    """Called when the test starts"""
    print("Starting load test...")
    start_system_monitoring()


@events.test_stop.add_listener
def on_test_stop(environment, **kwargs):
    """Called when the test stops"""
    print("Load test completed!")
    system_metrics = stop_system_monitoring()

    # Save system metrics to file
    with open("system_metrics.json", "w") as f:
        json.dump(system_metrics, f, indent=2)

    print(f"System metrics saved:")
    print(f" - Average CPU: {system_metrics['avg_cpu']:.2f}%")
    print(f" - Average Memory: {system_metrics['avg_memory']:.2f}%")
    print(f" - Max CPU: {system_metrics['max_cpu']:.2f}%")
    print(f" - Max Memory: {system_metrics['max_memory']:.2f}%")


# Configuration for different test scenarios
TEST_SCENARIOS = {
    "high_load": {
        "users": 250000,
        "spawn_rate": 100,
        "run_time": "3m",
        "description": "High load with 250000 concurrent users (100 users per second)"
    }
}

if __name__ == "__main__":
    print("Available test scenarios:")
    for scenario, config in TEST_SCENARIOS.items():
        print(f"   {scenario}: {config['description']}")

    print("\nTo run a specific scenario, use:")
    # print("   locust -f locustfile.py --host=http://localhost:3000")
    print("   locust -f locustfile.py --host=http://localhost:3000 --users=250000 --spawn-rate=100 --run-time=3m")

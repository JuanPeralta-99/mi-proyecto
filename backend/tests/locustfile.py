class TaskUser(HttpUser):
    host = "http://localhost:4000"  # <-- Puerto correcto
    wait_time = between(1, 3)

    @task(2)
    def get_tasks(self):
        self.client.get("/api/tasks")

    @task(1)
    def create_task(self):
        payload = {
            "title": "Tarea de prueba",
            "description": "Esta es una tarea generada por Locust"
        }
        self.client.post("/api/tasks", json=payload)

const API_BASE_URL = "http://127.0.0.1:5000";

async function request(path, options = {}) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: { "Content-Type": "application/json", ...(options.headers || {}) },
    ...options
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(data.message || "Request failed");
  }
  return data;
}

export const api = {
  register: (payload) => request("/register", { method: "POST", body: JSON.stringify(payload) }),
  login: (payload) => request("/login", { method: "POST", body: JSON.stringify(payload) }),
  careers: () => request("/careers"),
  analyzeSkills: (payload) => request("/skill-analysis", { method: "POST", body: JSON.stringify(payload) }),
  analyzeResume: (payload) => request("/resume-analysis", { method: "POST", body: JSON.stringify(payload) }),
  generateRoadmap: (payload) => request("/generate-roadmap", { method: "POST", body: JSON.stringify(payload) }),
  users: () => request("/users"),
  reports: () => request("/reports")
};

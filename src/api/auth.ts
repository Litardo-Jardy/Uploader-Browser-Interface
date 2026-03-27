import { apiFetch } from "./client";
import type { LoginResponse, LoginRequest } from "../types/auth";

export function login(data: LoginRequest) {
    return apiFetch<LoginResponse>("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
}

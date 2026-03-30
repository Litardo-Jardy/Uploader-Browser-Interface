const API_URL = "http://192.168.10.43:3000";

export async function apiFetch<T>(
 endpoint: string,
 options: RequestInit
): Promise<T> {
  const res = await fetch(`${API_URL}${endpoint}`, {
    ...options,
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(errorText)}

  return res.json() as Promise<T>}

  

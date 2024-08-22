export const apiClient = async <T,>(
  endpoint: string,
  options?: RequestInit
): Promise<T> => {
  const response = await fetch(endpoint, {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  });

  if (!response.ok) {
    const errorMessage = `Error: ${response.status} ${response.statusText}`;
    throw new Error(errorMessage);
  }

  return response.json();
};

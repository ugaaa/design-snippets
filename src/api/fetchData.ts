// lib/api.ts
export const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;

const logErrorToAPI = async (error: any) => {
  await fetch('/api/logError', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ error: error.message }),
  });
};

interface FetchOptions {
  endpoint: string;
  params?: Record<string, string | number>;
}

export const fetchData = async ({ endpoint, params }: FetchOptions) => {
  try {
    const url = new URL(`${API_URL}/${endpoint}`);
    
    // クエリパラメータを追加
    if (params) {
      Object.keys(params).forEach(key => url.searchParams.append(key, String(params[key])));
    }

    const response = await fetch(url.toString(), {
      headers: {
        'Authorization': `Bearer ${API_TOKEN}`,
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching snippets:', error);
    await logErrorToAPI(error);
    throw error;
  }
};

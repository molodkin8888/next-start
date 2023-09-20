function requestInterceptor(request: Request): Request {
  const token = 'token';
  request.headers.append('Authorization', `Bearer ${token}`);

  return request;
}

function responseInterceptor(response: Response): Response {
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return response;
}

export function fetchInstance(
  path: string,
  options?: RequestInit,
): Promise<Response> {
  const apiUrl = 'https://jsonplaceholder.typicode.com';
  const url = `${apiUrl}${path}`;
  const modifiedRequest = requestInterceptor(new Request(url, options));

  return fetch(modifiedRequest).then((response: Response) => {
    const modifiedResponse = responseInterceptor(response);

    return modifiedResponse;
  });
}

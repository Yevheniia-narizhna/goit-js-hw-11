export function getImages(query) {
  const API_KEY = '45112034-271f1d190327e1d75e8ffdf0b';
  const baseURL = 'https://pixabay.com/api/?';
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  const URL = baseURL + params;
  return fetch(URL).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

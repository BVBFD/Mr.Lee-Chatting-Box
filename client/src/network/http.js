export default class HttpClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async fetch(url, options) {
    const response = await fetch(`${this.baseURL}/tweets/${url}`, {
      ...options,
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Origin: 'https://academiachattingsequelize.netlify.app',
        ...options.headers,
      },
      credentials: 'include',
    });
    let data;
    try {
      data = await response.json();
    } catch (error) {
      console.error(error);
    }

    if (response.status > 299 || response.status < 200) {
      const message =
        data && data.message ? data.message : 'Something went wrong!';
      throw new Error(message);
    }
    return data;
  }
}

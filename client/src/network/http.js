export default class HttpClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async fetch(url, options) {
    const response = await fetch(`${this.baseURL}/tweets/${url}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
    });
    let data;
    try {
      data = await response.json();
    } catch (error) {
      console.error(error);
    }
    // 요청 req의 response에 body가 없으면 error가 발생할수도 있으니깐
    // 에러처리를 해준다.

    if (response.status > 299 || response.status < 200) {
      const message =
        data && data.message ? data.message : "Something went wrong!";
      throw new Error(message);
    }
    return data;
  }
}

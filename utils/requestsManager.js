

export default class RequestsManager {
  
  constructor(request) {
    this.request = request;
  }

  async searchRequestGET(q, format){
    return await this.request.get(`https://api.duckduckgo.com/?q=`+ q + `&format=` + format,
      {
        headers: {
          "Accept-Language": "es-419,es;q=0.9,en;q=0.8",
          "Cache-Control": "no-cache",
          Connection: "keep-alive",
          Pragma: "no-cache",
          accept: "*/*"
        },
      }
    );
  }
}
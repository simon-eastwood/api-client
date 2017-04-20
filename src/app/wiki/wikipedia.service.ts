import { Injectable } from '@angular/core';
import { Http, BrowserXhr, Response, RequestOptions, Headers, Request, RequestMethod, URLSearchParams, Jsonp } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class WikipediaService {
  private headers = new Headers();
  constructor(private http: Http) { 
    this.headers.append('Content-Type', 'application/json');
        this.headers.append('X-Simon', 'dummy');
    //this.headers.append('Origin', 'http://localhost:3000/');
  }

  search(term: string) {

// let headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8', "Access-Control-Allow-Origin": "*", 'dataType': 'json', });
  let options = new RequestOptions({ headers: this.headers });



    // let wikiUrl = 'http://en.wikipedia.org/w/api.php';
    let wikiUrl = 'https://ops.epo.org/3.1/rest-services/published-data/search?q=' + term;
  

  console.log (options);
    // TODO: Add error handling
    return this.http.get(wikiUrl, options)
      .map((res: Response) => {
        if (res) {
          return res.json();
        }
      });
  }
}

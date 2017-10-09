import { TestBed, inject } from '@angular/core/testing';
import { Http, HttpModule, BaseRequestOptions, Response, ResponseOptions, RequestMethod } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { AppService } from './app.service';

describe('AppService', () => {
    let service: AppService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpModule],
        providers: [AppService, MockBackend]
      });
    });
    
    it('should update data from form', () => {
        inject([AppService], (mockBackend, userService) => {
        return new Promise((resolve, reject) => {
          mockBackend.connections.subscribe(connection => {
          connection.mockRespond(new ResponseOptions({status: 200}));
          });
          let customerNumber = "123456"
          userService.saveBlog(customerNumber).subscribe(
            (successResult) => {
              expect(successResult).toBeDefined();
              expect(successResult.status).toBe(200);
            });
        });
      });
    });
});

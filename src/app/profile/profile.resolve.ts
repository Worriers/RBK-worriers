import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { GradsService } from '../shared/grads.service';

@Injectable()
export class ProfileResolve implements Resolve<any> {

  constructor(private gradService : GradsService, private router : Router) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this.gradService.getProfile(route.params).then(res => {
        var data = JSON.parse(res._body);
        if(res.status !== 200 || !data.completed || !data.username){
            this.router.navigate([('/')]);
    	} else {
        console.log(data);
			  return data;
    	}
    });
  }
}
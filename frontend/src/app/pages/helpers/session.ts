import { BaseHelper } from './base';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { GeneralHelper } from './general';

import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'


declare var $: any;


export abstract class SessionHelper 
{ 

    constructor(
        private httpClient: HttpClient,) 
      {
        this.preLoad();
      }


    private preLoad()
    {
      if(BaseHelper.backendServiceControl == null)
        this.backendServiceControl();
    }

    private backendServiceControl()
    {
      setTimeout(() => 
      {
        //burası ajacx ile cotrol yapılacak
         
        //this.doHttpRequest("POST", BaseHelper.backendUrl, null)
        //.then((data) => BaseHelper.backendServiceControl = true)
        //.catch((errorMessage) => this.messageHelper.sweetAlert("Sunucu servisleri şuan çalışmıyor olabilir. Sorun yaşarsanız bir süre sonra tekrar deneyin.", "Sunucuya erişilemedi"));
      }, 100);
    }

}
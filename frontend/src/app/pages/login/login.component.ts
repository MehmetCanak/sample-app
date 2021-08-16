import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Swal from 'sweetalert2'  


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mail: string = "iletisim@omersavas.com";
  pass: string = "12345";
  token: string | null ="";
  
  constructor( private http: HttpClient) {   
  }
  ngOnInit(): void {
    this.token = localStorage.getItem("token");
  }

  validForm()
  {
    if(this.mail.length == 0){
      alert("Mail boş geçilemez");
      return false;
    }

    if(this.pass.length == 0){
      alert("Pass boş geçilemez");
      return false;
    }

    return true;
  }

  girisYap()
  {
    if(!this.validForm()) return;
    
    
    var url = "http://192.168.3.56/codeigniter/index.php/tr/api/auth/login";
    url += "?mail="+this.mail;
    url += "&pass="+this.pass;

    this.http.get(url).subscribe(


    (response: any) =>
    {
      if(typeof response.token == "undefined") alert("Mail yada şifre hatalı!");
      else 
      {
        localStorage.setItem("token", response.token);
        this.token = response.token;
        Swal.fire(
          'Başarılı!',
          'Başarı ile giriş yaptınız!',
          'success'
        )
      }
    },

    (error) =>
    {
      alert("error");
    }


    )
  }

  cikisYap()
  {
    localStorage.removeItem("token");
    this.token = null;
  }

}

import { analyzeAndValidateNgModules } from '@angular/compiler';
import { environment } from './../../../environments/environment';

declare var $: any;
document.title = environment.title;



export abstract class BaseHelper 
{ 

    public static backendBaseUrl:string = "https://"+environment.host+"/";
    public static backendUrl:string = "https://"+environment.host+"/api/v1/";
    public static dashboardUrl:string = "https://"+environment.host+"/#/"+environment.urlPath+"/dashboard";
    public static baseUrl:string = "https://"+environment.host+"/#/"+environment.urlPath+"/";
    public static urlPath:string = environment.urlPath;
    public static token:string = "";
    public static firebaseToken:string = "";
    public static loggedInUserInfo = null;
    public static tokenTimeOut = 1000 * 60 * 60 * 24 * 5;
    public static backendServiceControl = null;


    public static preLoad()
    {
      this.fillUserData();
    }

    private static fillUserData()
    {
      this.fillTokenIfExist();
      this.fillLoggedInUserInfoIfExist();
    }

    private static fillTokenIfExist()
    {
      var temp = this.readFromLocal("token");
      if(temp != null) this.token = temp;
      
      temp = this.readFromLocal("firebaseToken");
      if(temp != null) this.firebaseToken = temp;
    }

    private static fillLoggedInUserInfoIfExist()
    {
      var temp = this.readFromLocal("loggedInUserInfo");
      if(temp != null) this.loggedInUserInfo = temp;
    }
  
    public static readFromLocal(key : string)
    {
      var jsonStr = localStorage.getItem(key);
      if(jsonStr == null) return null;
  
      jsonStr = this.decode(jsonStr);
  
      var obj = this.jsonStrToObject(jsonStr);
  
      if(this.getLocalDataExpiration(obj))
        return obj.data;
      else
      {
        this.removeFromLocal(key);
        return null;
      }
    }

    private static getLocalDataExpiration(obj: { timeOut: number; startTime: string | number | Date; })
    {
      if(obj.timeOut < 0) return true;
  
      var startTime = new Date(obj.startTime);
      var now = new Date();
  
      var interval = now.getTime() - startTime.getTime();
  
      return interval < obj.timeOut;
    }

    public static decode(str: string)
    {
      return str;
    }

    public static jsonStrToObject(jsonStr:string)
    {
      if(jsonStr == "") return "";
      return JSON.parse(jsonStr);    
    }

    public static clearToken()
    {
      this.removeFromLocal("token");
      this.token = "";
    }

    public static removeFromLocal(key: string)
    {
      localStorage.removeItem(key);
    }

    public static setToken(token:any)
    {
      this.writeToLocal("token", token, this.tokenTimeOut)
      this.token = token;
    }

    public static setLoggedInUserInfo(info:any)
    {
      this.writeToLocal("loggedInUserInfo", info, this.tokenTimeOut)
      this.loggedInUserInfo = info;
    }

    public static writeToLocal(key:any, value:any, timeOut = -1)
    {
      if(timeOut == 0) return;
      
      var obj = 
      {
        "data": value,
        "timeOut": timeOut,
      };
  
      //if(timeOut > 0) obj["startTime"] = new Date().toString();// burası hata veriyor cözülecek
  
      var jsonStr = this.objectToJsonStr(obj);
      jsonStr = this.encode(jsonStr);
  
      localStorage.setItem(key, jsonStr);
    }
    
    public static clearUserData()
    {
      this.clearToken();
      this.clearLoggedInUserInfo();
    }
  
  
    public static clearLoggedInUserInfo()
    {
      this.removeFromLocal("loggedInUserInfo");
      this.loggedInUserInfo = null;
    } 
  
    public static encode(str:any)
    {
      return str;
    }
    public static objectToJsonStr(obj:any)
    {
      return JSON.stringify(obj);
    }
    public static sleep(ms :any) 
    {
      return new Promise(resolve => setTimeout(resolve, ms)); //ne işe yarıyor bakılacak
    }
  
}
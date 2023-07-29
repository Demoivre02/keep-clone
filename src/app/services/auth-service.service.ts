import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth'
import { Router } from '@angular/router';
import {GoogleAuthProvider} from '@angular/fire/auth'

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {


  constructor(
    private fireauth : AngularFireAuth,
    private router : Router
  ) { }

  login(email : string , password :string){
      this.fireauth.signInWithEmailAndPassword(email, password).then((res:any)=>{
        localStorage.setItem('token', 'true')
        if (res.user?.emailVerified) {
          this.router.navigateByUrl('/dashboard')
        } else{
          this.router.navigateByUrl('/')
        }
      }, err =>{
        console.error(err)
        this.router.navigateByUrl('/')
      }

      )
  }

  //register
  register(email: string , password: string){
    this.fireauth.createUserWithEmailAndPassword(email, password).then(()=>{
      this.router.navigateByUrl('/')
    }, err =>{
      console.error(err.message)
      this.router.navigateByUrl('/signup')
    }
    )
  }

  logout(){
    this.fireauth.signOut().then((res:any)=>{
        localStorage.removeItem('token')
        this.router.navigateByUrl('/')
        this.sendEmailforVerifiaction(res.user)
    }, err => {
      console.error(err.message)
    })
  }

  forgotPassword(email :string ){
    this.fireauth.sendPasswordResetEmail(email).then((res)=>{
        this.router.navigateByUrl('/verify')
    },err =>{
      console.error(err.message);

    } )
  }

  sendEmailforVerifiaction(user : any){
    user.sendEmailVerification().then ((res : any )=>{
      this.router.navigateByUrl('/verify')
    }, (err :any )=>{
      console.error(err.message);

    } )
  }

  logInWithGoogle(){
    this.fireauth.signInWithPopup( new GoogleAuthProvider ).then((res : any)=>{
      this.router.navigateByUrl('/dashboard')
      localStorage.setItem('token' , JSON.stringify(res.user?.uid))
    }, (err : any)=>{
      console.error(err.message);

    })
  }

}

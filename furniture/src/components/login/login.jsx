import React from 'react'
import './Style.css';

export const Login = () => {


  

  
  return (
    <div class="main_div">
    <div class="title">Login Form</div>
    <div class="social_icons">
      <a href="https://www.facebook.com/campaign/landing.php?campaign_id=14884913640&extra_1=s%7Cc%7C589460569900%7Cb%7Cface%20book%20log%20in%7C&placement=&creative=589460569900&keyword=face%20book%20log%20in&partner_id=googlesem&extra_2=campaignid%3D14884913640%26adgroupid%3D128696221912%26matchtype%3Db%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-6167883633%26loc_physical_ms%3D1007824%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=CjwKCAjwqZSlBhBwEiwAfoZUIM-tJmhVIDXIb9pn7G27SABd70_ZXYVdLQPShV47NqCJMIn6wLldoBoCUjoQAvD_BwE"><i class="fab fa-facebook-f"></i> <span>Facebook</span></a>
      <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Flogin%3Flang%3Den"><i class="fab fa-twitter"></i><span>Twitter</span></a>
    </div>
    <form action="#">
      <div class="input_box">
        <input type="text" placeholder="Email or Phone" required id="login_email"/>
        <div class="icon"><i class="fas fa-user"></i></div>
      </div>
      <div class="input_box">
        <input type="password" placeholder="Password" required id="password"/>
        <div class="icon"><i class="fas fa-lock"></i></div>
      </div>
      <div class="option_div">
        <div class="check_box">
          <input type="checkbox"/>
          <span>Remember me</span>
        </div>
        <div class="forget_div">
          
        </div>
      </div>
      <div class="input_box button">
        <input type="submit" value="Login"id="login"/>
      </div>
      <div class="sign_up">
        Not a member? <a href="SignUp.html">Signup now</a>
      </div>
    </form>
  </div>

  )
}

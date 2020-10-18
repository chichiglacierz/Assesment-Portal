import React from 'react';
import classes from './footer.module.css';
import EmailIcon from '../Assets/Email.svg';
import CallIcon from '../Assets/Call.svg';
import TwitterIcon from '../Assets/twitter.svg';
import FbIcon from '../Assets/fbimage.png';
import LandMarkIcon from '../Assets/landmark.png';
import LinkedinIcon from '../Assets/linkden.png';


export default function Footer(){
    return(
        <div className={classes.FooterMainDiv}>
            <div className={classes.FooterItemDiv}>

               <div className={classes.FooterTitleSection}>
                   <div className={classes.FooterHeadingSection}>
                       EdYoda
                   </div>
                   <div className={classes.FooterNav}>
                       About Us
                   </div>
                   <div className={classes.FooterNav}>
                       Contact Us
                   </div>
                   <div className={classes.FooterNav}>
                       Terms Of Use
                   </div>
                   <div className={classes.FooterNav}>
                       Privacy Policy
                   </div>
                   </div> 

                   <div className={classes.FooterTitleSection}>
                   <div className={classes.FooterHeadingSection}>
                   RESOURCES
                   </div>
                   <div className={classes.FooterNav}>
                       Courses
                   </div>
                   <div className={classes.FooterNav}>
                       Learning Videos
                   </div>
                   <div className={classes.FooterNav}>
                       EdYoda Stories
                   </div>
                   <div className={classes.FooterNav}>
                       University
                   </div>
                   </div> 

                   <div className={classes.FooterTitleSection}>
                   <div className={classes.FooterHeadingSection}>
                   For Enterprises
                   </div>
                   <div className={classes.FooterNav}>
                       Hire Edyoda Graduates
                   </div>
                   <div className={classes.FooterHeadingSection}>
                   Quick Links
                   </div>
                   <div className={classes.FooterNav}>
                       Learn and Earn
                   </div>
                   <div className={classes.FooterNav}>
                       Become a Learning-Enabler
                   </div>
                   <div className={classes.FooterNav}>
                       Tips for Learning-Enabler
                   </div>
                   <div className={classes.FooterNav}>
                      Request New Topic
                   </div>
                   </div> 


                   <div className={classes.FooterTitleSection}>
                   <div className={classes.FooterHeadingSection}>
                   CONNECT
                   </div>
                   <div className={classes.FooterNav}>
                   2nd Floor #188, Survey No. - 123/1, Incubes Building Next to McDonalds, ITPL Main Rd, Brookefield, Bengaluru, Karnataka-560037, India
                   </div>
                   <div className={classes.FooterContactIcon}>
                    <img className={classes.ImageIcon} src={EmailIcon} alt="Email"/>
                      hello@edyoda.com
                   </div>
                   <div className={classes.FooterContactIcon}>
                    <img className={classes.ImageIcon} src={CallIcon} alt="CallIcon"/>
                    +91 8971554184
                   </div>
                   
                    <div className={classes.FooterSectionSocialLinks}>
                    <img className={classes.SocialIcon} src={LandMarkIcon} alt="LandMarkIcon"/>
                    <img className={classes.SocialIcon} src={TwitterIcon} alt="TwitterIcon"/>
                    <img className={classes.SocialIcon} src={FbIcon} alt="FbIcon"/>
                    <img className={classes.SocialIcon} src={LinkedinIcon} alt="LinkedinIcon"/>
                    </div>

                    <div className={classes.CopyrightSection}>
                    © 2020 <br/> zekeLabs Technologies Private Limited
                    </div>

                   </div> 

            </div>
        </div>
    )
}
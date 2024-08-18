import React from "react"
import Layout from "../components/Layout"
import * as infoStyles from "../styles/pages/info.module.scss"
import githubLogoImage from '../../static/github-logo.png'
import linkedinLogoImage from '../../static/linkedin-logo.png'
import aboutmeImage from '../../static/aboutmePicture.jpg'
import mailLogoImage from '../../static/mail-logo.png'

export default function Info() {
  return (
    <Layout page="info" articleTitle="About me">
        <div className={infoStyles.responsiveContainerBlock}>
        <img className={infoStyles.profilePicture} src={aboutmeImage}/>
          <p className={infoStyles.textBlk + ' ' + infoStyles.heading}>
            About Me
          </p>
          <p className={infoStyles.textBlk + ' ' + infoStyles.subHeading}>
          Hello, I’m Mohamed, an engineer navigating life with a deep love for the things that make it beautiful. On this blog, I want to share my musings on everything that captivates me: the timeless allure of history, the wonders of science, or the stories behind the latest films, albums, and books I’ve explored. Whatever you're here for, I hope you find something that resonates with you. Thanks for stopping by!
          </p>
          <div className={infoStyles.socialIconsContainer}>
            <a className={infoStyles.socialIcona} href="https://github.com/moussmo" target="_blank">
              <img className={infoStyles.socialIcon} 
              src={githubLogoImage}/>
            </a>
            <a className={infoStyles.socialIcona} href="https://www.linkedin.com/in/mo-mouss/" target="_blank">
              <img className={infoStyles.socialIcon}
               src={linkedinLogoImage}/>
            </a>
            <a className={infoStyles.socialIcona} href="mailto:mouss.mo.ke@gmail.com" target="_blank">
              <img className={infoStyles.socialIcon}
               src={mailLogoImage}/>
            </a>
          </div>
        </div>
    </Layout>
  )
}


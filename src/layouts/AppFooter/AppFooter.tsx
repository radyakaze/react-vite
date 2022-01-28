import React from 'react'
import Button from '../../components/Button/Button'
import TwitterIcon from '@/assets/twitter_icon.svg?component'
import FacebookIcon from '@/assets/facebook_icon.svg?component'
import LinkedinIcon from '@/assets/linkedin_icon.svg?component'
import './style.scss'

const AppFooter = () => (
  <footer className="app-footer">
    <div className="flex">
      <Button variant="secondary" className="mr-3" aria-label="Twitter">
        <TwitterIcon height={20} width={20} />
      </Button>
      <Button variant="secondary" className="mr-3" aria-label="Linkedin">
        <LinkedinIcon height={20} width={20} />
      </Button>
      <Button variant="secondary" aria-label="Facebook">
        <FacebookIcon height={20} width={20} />
      </Button>
    </div>
    <div className="mt-6 footer-menu">
      <ul>
        <li>About</li>
        <li>For Business</li>
        <li>Suggestions</li>
        <li>Help &amp; FAQs</li>
        <li>Contacs</li>
        <li>Pricing</li>
      </ul>
    </div>
    <div className="copyright">
      &#169; Copyright 2013 companyname.inc
      <div className="mt-3">Privacy / Terms</div>
    </div>
  </footer>
)

export default AppFooter

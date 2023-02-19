import React from 'react'
import {google, slack, atlassian, dropbox, shopify} from './imports';
import './brand.css'
const Brand = () => {
  return (
    <div className='gpt3__brand section__padding'>
      <div>
        <img src={google} alt='google'/>
      </div>
      <div>
        <img src={slack} alt='slack'/>
      </div>
      <div>
        <img src={atlassian} alt='atlassian'/>
      </div>
      <div>
        <img src={dropbox} alt='dropbox'/>
      </div>
      <div>
        <img src={shopify} alt='shopify'/>
      </div>
    </div>
  )
}
export default Brand
// repeat same step which you had done in article folder under components 
// build arrow function using rafce <- enter add brand.css file in this by importing './brand.css'
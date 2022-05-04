import React from 'react'
import overviewData from './data/overviewData.json'

import {ReactComponent as IconUp} from './images/icon-up.svg'
import {ReactComponent as IconDown} from './images/icon-down.svg'

import {ReactComponent as Facebook} from './images/icon-facebook.svg'
import {ReactComponent as Twitter} from './images/icon-twitter.svg'
import {ReactComponent as Instagram} from './images/icon-instagram.svg'
import {ReactComponent as Youtube} from './images/icon-youtube.svg'

const SocialLogos = [
  <Facebook />,
  <Facebook />,
  <Twitter />,
  <Twitter />,
  <Instagram />,
  <Instagram />,
  <Youtube />,
  <Youtube />
]

function Overview({toggle}) {
  return (
    <div className={`overview ${toggle}`}>
      <p className='overview-title'>Overview - Today</p>
      {overviewData.map((item, index) => {
        return (
          <div className="overview-desc">
            <p className="overview-name">{item.title}</p>
            <div className='overview-icon'>{SocialLogos[index]}</div>
            <p className='overview-numbers'>{item.numbers}</p>
            <div className={`overview-additional ${item.isDown ? "down" : ""}`}>
              {item.isDown ? <IconDown /> : <IconUp />}
              <span>{item.additional}%</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Overview
import React from 'react'
import { motion } from "framer-motion"
import socialData from './data/socialData.json'

import {ReactComponent as IconUp} from './images/icon-up.svg'
import {ReactComponent as IconDown} from './images/icon-down.svg'

import {ReactComponent as Facebook} from './images/icon-facebook.svg'
import {ReactComponent as Twitter} from './images/icon-twitter.svg'
import {ReactComponent as Instagram} from './images/icon-instagram.svg'
import {ReactComponent as Youtube} from './images/icon-youtube.svg'

const SocialLogos = [
  <Facebook />,
  <Twitter />,
  <Instagram id='1' />,
  <Youtube />
]

function Social({toggle}) {
  const variants = {
    hover: {scale: 1.05, filter: "brightness(1.2)"},
    tap: {scale: 0.95, filter: "brightness(1)"},
    hoverLight: {scale: 1.05, filter: "brightness(0.8)"}
  }

  return (
    <div className={`social ${toggle}`}>
      {socialData.map((item, index) => {
        return (
          <motion.div
            variants={variants}
            whileHover={toggle === "Dark" ? 'hover' : 'hoverLight'}
            whileTap={'tap'}
            className={`social-each ${toggle} ${item.alt}`}
          >
            <div className='social-title'>
              {SocialLogos[index]}<span>{item.user}</span>
            </div>

            <div className="social-followers">
              <h2>{item.followers}</h2>
              <p>FOLLOWERS</p>
            </div>

            <div className={`social-additional ${item.isDown ? "down" : ""}`}>
              {item.isDown ? <IconDown /> : <IconUp />}
              <span>{item.additional} Today</span>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}

export default Social
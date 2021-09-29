import React from 'react'
import moon from './assets/moon.svg'
import { motion } from 'framer-motion'
import './App.css'

function Moon() {
    return (
        <motion.div
        drag 
      dragConstraints={{left: 0, top:0, right: 0, bottom: 0}}
      dragElastic={0.7}
        >
            <img src={moon} alt="" className="moon"/>
        </motion.div>
    )
}

export default Moon

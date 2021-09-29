import React from 'react'
import moon from './assets/moon.svg'
import { motion } from 'framer-motion'
import './App.css'

function Moon() {
    return (
        <motion.div>
            <img src={moon} alt="" className="moon"/>
        </motion.div>
    )
}

export default Moon

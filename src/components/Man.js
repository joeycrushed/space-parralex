import React from 'react'
import '../App.css'
import man from '../assets/1432836387.svg'
import { motion } from "framer-motion"


function Man() {
    return (
        <motion.div 
            animate={{ x: [0, 150], y: [150, 100, -150, 100], rotate: 360 }}
            transition={{ duration: 30, ease: "easeOut", yoyo: Infinity }}
        >
            <img src={man} alt="" className="man_image"/>
        </motion.div>
    )
}

export default Man

import React from 'react'
import '../App.css'
import rocket from '../assets/rocket.svg'
import { motion } from 'framer-motion'

function Rocket() {
    return (
        <motion.div
            animate={{ y: [15,-15]}}
            transition={{ duration: 2, ease: "easeOut", yoyo: Infinity }}

        ><img src={rocket} alt="" className="rocket"/>
        </motion.div>
            
    )
}

export default Rocket

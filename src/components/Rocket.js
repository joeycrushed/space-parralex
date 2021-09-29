import React from 'react'
import '../App.css'
import rocket from '../assets/rocket.svg'
import { motion } from 'framer-motion'

function Rocket() {
    return (
        <motion.div
        animate={{ rotate: 360 }}

        ><img src={rocket} alt="" className="rocket"/>
        </motion.div>
            
    )
}

export default Rocket

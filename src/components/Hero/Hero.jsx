import React from "react";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";
import css from "./Hero.module.scss";
import { motion } from "framer-motion";
import {FiChevronsDown} from 'react-icons/fi'
const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      >
        <div className={css.upperElements}>
          <motion.span className="primaryText" variants={fadeIn("right", "tween", 0.2, 1)}>
            Hey There,
            <br />
            We Got You Covered!
          </motion.span>
          <motion.span className="secondaryText"variants={fadeIn("left", "tween", 0.4, 1)}>
            We offer remote-tech assitance,
            <br />
            Academic Writing  and
            <br />
            Crypto Training, And we love what we do{" "}
            <br />
            <a className={css.scroll_down} href="#experties">
            <btn style={{color:'red', textAlign:'center'}}>Scroll Down</btn>
            <p><FiChevronsDown /></p>
            </a>
            
          </motion.span>
        </div>

        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className={css.person}
        >
          <motion.img variants={slideIn("up", "tween", 0.5, 1.3)} src="./person.png" alt="" />
        </motion.div>

        <a className={css.email} href="mailto:zainkeepscode@gmail.com">
        soundnwankwo@gmail.com
        </a>

        <div className={css.lowerElements}>
          <motion.div variants={fadeIn("right", "tween", 0.3, 1)} className={css.experience}>
            <div className="primaryText">7+</div>
            <div className="secondaryText">
              <div>Years</div>
              <div>Active</div>
            </div>
          </motion.div>

          <motion.div variants={fadeIn("left", "tween", 0.5, 1)} className={css.certificate}>
            <img src="./certificate.png" alt="" />
            <span>CERTIFIED CYBER TECHNICIAN</span>
            <span>CRYPTO TRADER</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;


// Crypto Training, portfolio arrangement
// Remote tech assistance
// Academic Writing (thesis assignment, research)
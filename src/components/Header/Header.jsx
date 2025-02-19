import React, { useEffect, useRef, useState } from "react";
import css from "./Header.module.scss";
import { BiMenuAltRight } from "react-icons/bi";
import {BsWhatsapp} from "react-icons/bs"
import { motion } from "framer-motion";
import { getMenuStyles, headerVariants } from "../../utils/motion";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";
import useHeaderShadow from "../../hooks/useHeaderShadow";
import logo from '../../assets/sound_logo.png'
import { Link } from "react-router-dom";

const Header = () => {
  const menuRef = useRef(null);
  const [menuOpened, setMenuOpened] = useState(false);
  const headerShadow = useHeaderShadow();

  //to handle click outside of sidebar on mobile
  useOutsideAlerter({
    menuRef,
    setMenuOpened,
  });

  return (
    <motion.div
      variants={headerVariants}
      initial="hidden"
      whileInView="show"
      className={`bg-primary paddings ${css.wrapper}`}
      viewport={{ once: true, amount: 0.25 }}
      style={{ boxShadow: headerShadow }}
    >
      <div className={`innerWidth ${css.container} flexCenter`}>
        <div className={css.name}>
          <img src={logo} alt="" width='50' height='50'/>
          SoundTechWorks</div>
        <ul
          className={`flexCenter ${css.menu}`}
          ref={menuRef}
          style={getMenuStyles(menuOpened)}
        >
          <li>
            <a href="#experties">Services</a>
          </li>
          {/* <li><a href="#work">Experience</a></li> */}
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <Link to="/book">Book a Session
            </Link>  
          </li>
          <li>
            <a href="#people">Testimonials</a>
          </li>
          <li className={`flexCenter ${css.phone}`}>
            <Link to='https://wa.me/message/U2BVV3PZQC5NP1' target="_blank">+234 (803) 302 8425</Link>
            <a href="https://wa.me/message/U2BVV3PZQC5NP1" target="_blank">
              <BsWhatsapp size={"40px"} />
            </a>
          </li>
        </ul>

        {/* for medium and small screens */}
        <div
          className={css.menuIcon}
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </motion.div>
  );
};

export default Header;

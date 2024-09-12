'use client'

import React from "react";
import style from "./page.module.css";
import {animate, motion} from 'framer-motion'
import {useRouter} from 'next/navigation'





const NavBar = () => {
  const Router = useRouter()
  return (
    <>
      <nav className={style.navBar_container}>
        <div className={style.navBar_list}>
         <motion.p whileHover={{scale:'1.1'}} onClick={()=>Router.push('/appoitment')} className={style.navBar_fnt}>Appoint</motion.p>
          <motion.p whileHover={{scale:'1.1'}} onClick={()=>Router.push('/Doctor')} className={style.navBar_fnt} >Doctors</motion.p>
          <motion.p whileHover={{scale:'1.1'}} onClick={()=>Router.push('/Patient')} className={style.navBar_fnt}>Patients</motion.p>
        </div>
      </nav>
    </>
  );
};

export default NavBar;

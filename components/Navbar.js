import navbar from '../styles/navbar.module.css';
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import { useRouter } from "next/router";

export default function Navbar(props) {

  const router = useRouter();

  const isHome = router.pathname === "/";
  const isContact = router.pathname === "/Contact";
  const isRegister = router.pathname === "/Register";

  return (
    <>
      <Script src="https://kit.fontawesome.com/a076d05399.js"></Script>
      <nav className={navbar.nav}>
        <div className={navbar.logo}>
          <Image src='https://hardcore-liskov-16622f.netlify.app/logo.png' layout='intrinsic' width={100} height={80}></Image>
        </div>
        <input type="checkbox" id="click" className={navbar.click}></input>
        <label htmlFor="click" className={navbar.menu_btn}>
          <i className="fas fa-bars"></i>
        </label>
        <ul>
          <li id="home"><Link href="/">Home</Link></li>
          <li id="contact"><Link href="/Contact">Contact us</Link></li>
          <li id="register"><Link href="/Register">register</Link></li>
          <style jsx>{
            `
    #home{
      position:relative;
	    border-radius: ${isHome ? "10px" : ""};
    }
    #home::after {
    background-color: #efefef;  
    bottom: 0;
    content: '';
    display: block;
    height: 1px;
    left: 50%;
    position: absolute;
    transform: translate(-50%,0);
    width: ${isHome ? "50px" : ""};
    }
    #contact {
      position:relative;
      border-radius: ${isContact ? "10px" : ""};
    }
    #contact::after {
    background-color: #efefef;
    bottom: 0;
    content: '';
    display: block;
    height: 1px;
    left: 50%;
    position: absolute;
    transform: translate(-50%,0);
    width: ${isContact ? "50px" : ""};
    }
    #register {
      position:relative;
      border-radius: ${isRegister ? "10px" : ""};
    }
    #register::after {
    background-color: #efefef;
    bottom: 0;
    content: '';
    display: block;
    height: 1px;
    left: 50%;
    position: absolute;
    transform: translate(-50%,0);
    width: ${isRegister ? "50px" : ""};
    }
  `
          }</style>
        </ul>
      </nav>
    </>
  )
}
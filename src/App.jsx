import './App.css';
import centerlogo from './Images/logo.png';
import diagonaltext from './Images/diagonal-text.png';
import leftarrow from './Images/left-arrow.png';
import rightarrow from './Images/right-arrow.png';
import downarrow from './Images/down-arrow.png';
import workimg1 from './Images/work-img-1.jpg';
import workimg2 from './Images/work-img-2.jpeg';
import workimg3 from './Images/work-img-3.jpeg';
import workimg4 from './Images/work-img-4.png';
import contactimg from './Images/Contact-Logo.png';

function App() {
  return (
    <div id="holder">
        <div id="line1"></div>
        <div id="line2"></div>
        <div id="line3"></div>
        <div id="line4"></div>
        <div id="center-container">
            <div className="scollbar-hide" id="center-image-holder">
                <img id="center-logo-img" src={centerlogo} alt=""/>
            </div>
            <div id="center-appear-downarrow">
                <div id="center-line-1"></div>
                <div id="center-line-2"></div>
                <div id="center-arrow-appear-sec1"><h1>WE ARE THE 'OBLIQUITY COMPANY'.</h1></div>
                <div id="center-arrow-appear-sec2"><h1>CREATING BRANDS AND DESIGNING.</h1></div>
                <div id="center-arrow-appear-sec3"><h1>POWERFUL SOLUTIONS USING SHIFT.</h1></div>
            </div>
            <div className="scollbar-hide" id="center-appear-work">
                <div id="work-show-1">
                    <h1>MYLO</h1>
                    <h3>ENABLING 10 MILLION MOMS RAISE HAPPINESS</h3>
                </div>
                <div id="work-show-2">
                    <h1>BACARDI BLACK</h1>
                    <h3>MOVING RUM FROM DARK TO BLACK</h3>
                </div>
                <div id="work-show-3">
                    <h1>PAVEN</h1>
                    <h3>TURN TO PAVEN</h3>
                </div>
                <div id="work-show-4">
                    <h1>ENVIRONICS</h1>
                    <h3>WAR AGAINST INVISIBLE ENEMY</h3>
                </div>
                <div className="bounce-in-bottom" id="work-hide-1">
                    <img id="work-hide-imgs" src={workimg1} alt=""/>
                </div>
                <div className="bounce-in-bottom" id="work-hide-2">
                    <img id="work-hide-imgs" src={workimg2} alt=""/>
                </div>
                <div className="bounce-in-bottom" id="work-hide-3">
                    <img id="work-hide-imgs" src={workimg3} alt=""/>
                </div>
                <div className="bounce-in-bottom" id="work-hide-4">
                    <img id="work-hide-imgs" src={workimg4} alt=""/>
                </div>
            </div>
            <div className="scollbar-hide" id="center-appear-about">
                <h2 style={{textAlign: "justify" , padding: "20px" , lineHeight:"50px"}}>THE MOST DIFFICULT PROBLEMS ARE OFTEN SOLVED WITH THE SMALLEST OF SHIFTS. A SHIFT IN APPROACH OF VIEWPOINT OR IN THINKING. IT IS THESE SMALL SHIFTS THAT CAN CREATE A DISPROPORTINATELY BIG DIFFERENCE TO THE PROBLEM. THESE SMALL SHIFTS THEN BECOME THE MOST POWERFUL SOLUTIONS. AND GIVE BIRTH TO THE MOST MEMORABLE STORIES</h2>
                <h2 style={{textAlign: "justify" , padding: "20px 20px 5px 20px" , color:"#1b06e0" }}>WHAT WE DO:</h2>
                <h3 style={{textAlign: "justify" , padding: "0px 20px" }}>INSIGHT & STRATEGY</h3>
                <h3 style={{textAlign: "justify" , padding: "0px 20px" }}>BRAND DESIGN & IDENTITY</h3>
                <h3 style={{textAlign: "justify" , padding: "0px 20px" }}>PACKAGING</h3>
                <h3 style={{textAlign: "justify" , padding: "0px 20px" }}>DIGITAL DESIGN</h3>
                <h3 style={{textAlign: "justify" , padding: "0px 20px" }}>MARKETING COMMUNICATION</h3>
                <h3 style={{textAlign: "justify" , padding: "0px 20px" }}>CORPORATE COMMUNICATION</h3>
                <h2 style={{textAlign: "justify" , padding: "20px 20px 5px 20px" , color:"#1b06e0" }}>OUR WORK</h2>
                <h2 style={{textAlign: "justify" , padding: "5px 20px" }}>MYLO</h2>
                <h3 style={{textAlign: "justify" , padding: "0px 20px" }}>ENABLING 10 MILLION MOMS RAISE HAPPINESS</h3>
                <h2 style={{textAlign: "justify" , padding: "5px 20px" }}>BACARDI BLACK</h2>
                <h3 style={{textAlign: "justify" , padding: "0px 20px" }}>MOVING RUM FROM DARK TO BLACK</h3>
                <h2 style={{textAlign: "justify" , padding:"20px 20px 5px 20px" , color:"#1b06e0" }}>ALL PROJECTS</h2>

            </div>
            <div className="scollbar-hide" id="center-appear-tech">
                <h1>Tech</h1>
            </div>
            <div className="scollbar-hide" id="center-appear-careers">
                <h1>Careers</h1>
            </div>
            <div className="scollbar-hide" id="center-appear-contact">
                <div id="img-set">
                    <img id="img-set-imgs" src={contactimg} alt="Logo"/>
                    <img id="img-set-imgs" src={contactimg} alt="Logo"/>
                    <img id="img-set-imgs" src={contactimg} alt="Logo"/>
                    <img id="img-set-imgs" src={contactimg} alt="Logo"/>
                    <img id="img-set-imgs" src={contactimg} alt="Logo"/>
                    <img id="img-set-imgs" src={contactimg} alt="Logo"/>
                    <img id="img-set-imgs" src={contactimg} alt="Logo"/>
                    <img id="img-set-imgs" src={contactimg} alt="Logo"/>
                    <img id="img-set-imgs" src={contactimg} alt="Logo"/>
                    <img id="img-set-imgs" src={contactimg} alt="Logo"/>
                    <img id="img-set-imgs" src={contactimg} alt="Logo"/>
                    <img id="img-set-imgs" src={contactimg} alt="Logo"/>
                    <img id="img-set-imgs" src={contactimg} alt="Logo"/>
                    <img id="img-set-imgs" src={contactimg} alt="Logo"/>
                    <img id="img-set-imgs" src={contactimg} alt="Logo"/>
                </div>
                <div style={{padding: "40px"}} id="contact-set-2">
                    <h2 style={{padding:"3px 20px" , color:"#1b06e0"}}>INTERESTED IN WORKING WITH US?</h2>
                    <h2 style={{padding:"3px 20px" , color:"#1b06e0"}}>WRITE TO US</h2>
                    <h2 style={{padding:"3px 20px"}}>FOR BUISINESSES - SANJEEV@DIAGONALBRANDS.COM</h2>
                    <h2 style={{padding:"3px 20px"}}>FOR CAREERS - SANJEEV @DIAGONALBRANDS.COM</h2>
                    <h2 style={{padding:"3px 20px" , color:"#1b06e0"}}>FIND US</h2>
                    <h2 style={{padding:"3px 20px"}}>KESAR SOLITAIRE, PALM BEACH, NAVI MUMBAI, 400705</h2>
                    <h2 style={{padding:"3px 20px" , color:"#1b06e0"}}>INSTAGRAM | FACEBOOK | LINKEDIN</h2>

                </div>
            </div>
            <div className="scollbar-hide" id="center-work-digital">
                <h1>Digital</h1>
            </div>
            <div className="scollbar-hide" id="center-work-tool-kit">
                <h1>Tool-kit</h1>
            </div>
            <div className="scollbar-hide" id="center-work-packaging">
                <h1>Packaging</h1>
            </div>
            <div className="scollbar-hide" id="center-work-space">
                <h1>Space</h1>
            </div>
            <div className="scollbar-hide" id="center-work-evp">
                <h1>EVP</h1>
            </div>
        </div>

        <a href="" onclick="">
            <div id="diagonal-text-holder">
                <img id="diagonal-text" src={diagonaltext} alt="logo-text"/>
            </div>
        </a>

        <a href="" onclick="leftArrowClicked();">
            <div id="left-arrow-holder">
                <img id="arrow-img" src={leftarrow} alt="arrow left"/>
            </div>
        </a>

        <a href="#center-appear-downarrow" onclick="downArrowClicked();">
            <div id="down-arrow-holder">
                <img id="arrow-img" src={downarrow} alt="arrow downwards"/>
            </div>
        </a>

        <a href="" onclick="rightarrowClicked();">
            <div id="right-arrow-holder">
                <img id="arrow-img" src={rightarrow} alt="arrow right"/>
            </div>
        </a>

        <div id="left">
            <div className="line-draw-hor" id="line-left-1"></div>
            <div className="line-draw-hor" id="line-left-2"></div>
            <a href="#center-image-holder" onclick="homeClicked();">
                <div id="sidesec1" className="sidesections">
                    <h1 id="sidesec-head1">Home</h1>
                </div>
            </a>

            <a href="#center-appear-work" onclick="workClicked();">
                <div id="sidesec2" className="sidesections">
                    <h1 id="sidesec-head2">Work</h1>
                </div>
            </a>
            <a href="#center-appear-about" onclick="aboutClicked();">
                <div id="sidesec3" className="sidesections">
                    <h1 id="sidesec-head3">About</h1>
                </div>
            </a>
        </div>
        <div id="right">
            <div className="line-draw-hor" id="line-right-1"></div>
            <div className="line-draw-hor" id="line-right-2"></div>
            <a href="#center-appear-tech" onclick="techClicked();">
                <div id="sidesec4" className="sidesections">
                    <h1 id="sidesec-head4">Tech</h1>
                </div>
            </a>
            <a href="#center-appear-careers" onclick="careersClicked();">
                <div id="sidesec5" className="sidesections">
                    <h1 id="sidesec-head5">Careers</h1>
                </div>
            </a>
            <a href="#center-appear-contact" onclick="contactClicked();">
                <div id="sidesec6" className="sidesections">
                    <h1 id="sidesec-head6">Contact</h1>
                </div>
            </a>
        </div>
    </div>  
  );
}

export default App;

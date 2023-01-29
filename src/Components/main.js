import React from "react";  
import { useState,useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { sha256 } from 'js-sha256';
import { Carousel } from 'react-responsive-carousel';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Nav from 'react-bootstrap/Nav';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './main1.css'

const Main1= ({reverse,value2,change1,value3,value4,value5,value6,value7,value10,value11,changetodoge,changetoltc,changetobtc,changetodoge4,changetoltc4,changetobtc4,event1,value500,from1,to1,value71,value72,value73,value74,value75,value76,call,value1500,value1006,backtohome,changetoxmr,value738,changetoxmr2,value739,value740,value741,changetobnb1,changetobnb2,value750,value751,changetobch1,changetobch2,changetotrx1,value760,value761,value7610,value501,value10070,value1600,changetorose1,event105,changetorose2,changetodash1,send2,first56,first66,changetoavax1,changetoada1,changetovet1})=>{
    const values = [true, 'sm-down', 'md-down', 'lg-down', 'xl-down', 'xxl-down'];
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);
    const [smShow, setSmShow] = useState(false);
    const [lgShow, setLgShow] = useState(false);
    const [lgShow3, setLgShow3] = useState(false);
    const [lgShow2, setLgShow2] = useState('');
	const [lgShow233, setLgShow233] = useState('');
    const [lgShow5, setLgShow5] = useState('');
	const [lgShow6, setLgShow6] = useState('');
	const [lgShow7, setLgShow7] = useState('');
    const [isActive, setActive] = useState("false");
    const [isActive2, setActive2] = useState("false");
    const [isActive3, setActive3] = useState("false");
    const [isActive4, setActive4] = useState("false");
    const [isActive5, setActive5] = useState("false");
    const [isActive6, setActive6] = useState("false");
	const [isActive7, setActive7] = useState("false");
	const [isActive8, setActive8] = useState("false");
	const [isActive9, setActive9] = useState("false");
	const [isActive10, setActive10] = useState("false");
	const [isActive11, setActive11] = useState("false");

    useEffect(() => {
		
		if(value3=="LTC"){
			setLgShow6("#345c9c")
			setLgShow233("0.02")
		}
		if(value3=="TRX"){
			setLgShow6("#fe060b")
			setLgShow233("35")
		}
		if(value3=="BTC"){
			setLgShow6("#f6921b")
			setLgShow233("0.00009")
		}
		if(value3=="DOGE"){
			setLgShow6("#baa133")
			setLgShow233("25")
		}
		if(value3=="DASH"){
			setLgShow6("#2673c3")
			setLgShow233("0.04")
		}
		if(value3=="BCH"){
			setLgShow6("#0bc18d")
			setLgShow233("0.02")
		}
		if(value3=="XMR"){
			setLgShow6("#f26623")
			setLgShow233("0.01")
		}
		if(value3=="BNB"){
			setLgShow6("#f0b80c")
			setLgShow233("0.008")
		}
		if(value3=="AVAX"){
			setLgShow6("#e64041")
			setLgShow233("0.1")
		}
		if(value3=="ADA"){
			setLgShow6("#0033af")
			setLgShow233("7")
		}
		if(value3=="VET"){
			setLgShow6("#16bdfe")
			setLgShow233("200")
		}
		
		fetch("https://rich-tan-lovebird-coat.cyclic.app/price23",{
			'method':'post',
			'headers':{'Content-type':'application/json'},
			'body': JSON.stringify({
				from:`${value3}`,
				to:`${value4}`
			})
		}).then(res => res.json()).then(data20 => {
            if (true) {
                setLgShow5(data20.rate)
            }
        })
    },[])

    const ToggleClass = () => {
      setActive(!isActive); 
     };
    const ToggleClass2 = () => {
      setActive(!isActive); 
     };

     const ToggleClass3 = () => {
        setActive2(!isActive2); 
       };
      const ToggleClass4 = () => {
        setActive2(!isActive2); 
       };

       const ToggleClass5 = () => {
        setActive3(!isActive3); 
       };

      const ToggleClass6 = () => {
        setActive3(!isActive3); 
       };

       const ToggleClass7 = () => {
        setActive4(!isActive4); 
       };

       const ToggleClass8 = () => {
        setActive4(!isActive4); 
       };

       const ToggleClass9 = () => {
        setActive5(!isActive5); 
       };

       const ToggleClass10 = () => {
        setActive5(!isActive5); 
       };

       const ToggleClass11 = () => {
        setActive6(!isActive6); 
       };

       const ToggleClass12 = () => {
        setActive6(!isActive6); 
       };
	   
	   const ToggleClass13 = () => {
		   setActive7(!isActive7); 
	   };
	   
	   const ToggleClass14 = () => {
		   setActive7(!isActive7); 
	   };
	   const ToggleClass150 = () => {
		   setActive8(!isActive8); 
	   };
	   const ToggleClass160 = () => {
		   setActive8(!isActive8); 
	   };
	   const ToggleClass170 = () => {
		   setActive9(!isActive9); 
	   };
	   const ToggleClass180 = () => {
		   setActive9(!isActive9); 
	   };
	   const ToggleClass190 = () => {
		   setActive10(!isActive10); 
	   };
	   const ToggleClass200 = () => {
		   setActive10(!isActive10); 
	   };
	   const ToggleClass210 = () => {
		   setActive11(!isActive11); 
	   };
	   const ToggleClass220 = () => {
		   setActive11(!isActive11); 
	   };
	   

       const rec =()=>{
        value2='RECEIVE'
       }

  
    function handleShow(breakpoint) {
      setFullscreen(breakpoint);
      setShow(true);
    }

    return(
        <div>
        <Row className='d-flex justify-content-end  align-items-center row_0'>
        
        <Col className='col-md-3 d-flex justify-content-center align-items-center flex-row' > <a className="btn45 mt-1 me-2 f6 grow no-underline ba bw1 ph2 pv1 mb1 dib b text-white pt-1">Search</a>
        <input id="name" placeholder='Your Order ID' className="b input-reset ba b--black-20 pt-2 pb-2 ps-2 db w-60" type="text" aria-describedby="name-desc" /> </Col>
        
        </Row>
                <Navbar bg="light" expand="lg" className='navbar1'>
                    <Container>
                        <Navbar.Brand href="#home" className="d-flex justify-content-center align-items-center mt-1">
                            <img src={require('./logo.png')} alt='bitbarter_logo' className='img25' onClick={backtohome} />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto d-flex justify-content-center align-items-center">
                        <Nav.Link href="#home" className='d-flex justify-content-center align-items-center navlink'>Wallets <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Icon_green_lamp_on.svg/512px-Icon_green_lamp_on.svg.png'  className='ms-2' width={'15px'}/>
                        <span className="b span45 d-flex justify-content-center align-items-center">Working</span>
                        </Nav.Link>
                            <Nav.Link href="#home" className='d-flex justify-content-center align-items-center navlink'>System Status <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Icon_green_lamp_on.svg/512px-Icon_green_lamp_on.svg.png' className='ms-2' width={'15px'}/>
                            <span className="b span45 d-flex justify-content-center align-items-center">Working</span></Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
			
                

            <article className="vh-100 dt w-100 pt-5 pb-5 bg-dark-pink">
            <div className="dtc v-mid tc white ph3 ph4-l">
            <article className="mw6 center bg-white br3 pa2 pa4-ns mv3 ba b--black-10 shadow-3">
            <Container>
            <Row>
                <Col className='col-md-12 text-black'>
                <Button className='btn1 b text-black shadow-3'>Variable rate</Button>
                </Col>
            </Row>

            <Row className='mt-3'>
            <Col className='col-md-12 text-black'>
                <p className='b text-black para1'>1 <span className='title1'>{value3}</span> = <span className='value'></span>{lgShow5} <span className='title2'>{value4}</span></p>
                </Col>
            </Row>

            <Row className='mt-3 justify-content-center align-items-center'>
            <Col className='col-md-5 text-center tc col10'>
            <article className="mw7 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10 shadow-3"  onClick={() => {
				setLgShow(true)
				setLgShow2('SEND')
			}}>
                    <img src={require(`./${value10}.png`)}/>
                    <h3 className='b text-black send_r mt-4 mb-1'>YOU SEND</h3>
                    <p className='b text-black'>{value3}</p>
                </article>
                </Col>

                <Col className='col-sm-2 tc text-center col13'>

                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-arrow-left-right text-black svg1" viewBox="0 0 16 16" onClick={reverse}>
                <path fill-rule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z"/>
                </svg>
                </Col>

                <Col className='col-md-5 text-center tc col10'>
                <article className="mw7 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10 shadow-3" onClick={() => {
					setLgShow3(true)
					setLgShow2('RECEIVE')
				}}>
                <img src={require(`./${value11}.png`)}/>
                    <h3 className='b text-black send_r mt-4 mb-1'>YOU RECEIVE</h3>
                    <p className='b text-black'>{value4}</p>
                </article>
                </Col>
            </Row>
            
            <Row className='mt-3'>
            <Col className='col-md-12 text-black'>
            <p className='b text-black para258'>Enter the amount that you will send</p>
            <input id="name2" style={{'color':`white`, 'background-color':`${lgShow6}`}} className="b input-reset ba b--black-20 pa3 mb2 db w-100 tc text-center" type="number" aria-describedby="name-desc" onFocus={value10070} onChange={send2} />
            <p className='b text-red text-center tc para3000' style={{'display':`${value501}`}} >Min. {value3} Amount is {lgShow233}</p>
            <p className='b text-red text-center tc para3000' style={{'display':`${value1600}`}} >Please Enter a Amount</p>
            </Col>
            </Row>
            
            <Row className='mt-3'>
            <Col className='col-md-12 text-black'>
                <p className='b text-black para10'>Receiving address</p>
                </Col>
            </Row>


            <Row className='mt-0'>
            <Col className='col-md-12 text-black'>
            <input id="name" className="input_address b  text-center tc input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" placeholder={`Your ${value4} Address`} onChange={event1} onFocus={value1006} />
            <p className='b text-red text-center tc para3000' style={{'display':`${value500}`}} >Please Enter a Valid {value4} address</p>
            <p className='b text-red text-center tc para3000' style={{'display':`${value1500}`}} >Please Enter a address</p>
                </Col>
            </Row>

            <Row className='mt-3'>
                <Col className='col-md-12 text-black'>
                <Button className='btn2 b text-black shadow-3' onClick={call}>EXCHANGE</Button>
                </Col>
            </Row>

            <Modal
        size="lg"
        show={lgShow}
        fullscreen={fullscreen}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
      <Modal.Header closeButton>
      <Modal.Title>
      <Row>
      <Col className='col-md-12 tc text-center'>
      <h3 className='b tc text-black'>YOU {lgShow2} </h3>
      </Col>
      </Row>
      </Modal.Title>
      </Modal.Header>
        <Modal.Body>
            <Row>
                <Col className='col-md-12 tc text-center'>
                    <p className="b text-black tc text-center para300">Choose your</p>
                </Col>
            </Row>

            <Row>
                <Col className='col-md-12 tc text-center'>
                    <p className="b text-black tc text-center para200">Crypto to {lgShow2}</p>
                </Col>
            </Row>

            <Row className='justify-content-center align-items-center'>

                <Col className='col-md-2 tc text-center shadow-5 pt-5 pb-5 me-4 ms-4 mt-4 mb-4 col20 col21' onMouseEnter={ToggleClass} onMouseLeave={ToggleClass2} onClick={changetobtc} style={{'display':`${value71}`}}>
                    <img src='https://cryptologos.cc/logos/bitcoin-btc-logo.png' width={'90px'}/>
                    <h4 className={isActive ? "notwhite1" : "white1"}>BTC</h4>
                    <p className={isActive ? "notwhite2" : "white2"}>Bitcoin</p>
                </Col>

                <Col className='col-md-2 tc text-center shadow-5 pt-5 pb-5 me-4 ms-4 mt-4 mb-4 col20 col22' onMouseEnter={ToggleClass3} onMouseLeave={ToggleClass4} onClick={changetoltc} style={{'display':`${value72}`}}>
                <img src='https://cryptologos.cc/logos/litecoin-ltc-logo.png' width={'90px'}/>
                    <h4 className={isActive2 ? "notwhite3" : "white3"}>LTC</h4>
                    <p className={isActive2 ? "notwhite4" : "white4"}>Litecoin</p>
                </Col>

                <Col className='col-md-2 tc text-center shadow-5 pt-5 pb-5 me-4 ms-4 mt-4 mb-4 col20 col23' onMouseEnter={ToggleClass5} onMouseLeave={ToggleClass6} onClick={changetodoge} style={{'display':`${value73}`}}>
                    <img src='https://cryptologos.cc/logos/dogecoin-doge-logo.png' width={'90px'}/>
                    <h4 className={isActive3 ? "notwhite5" : "white5"}>DOGE</h4>
                    <p className={isActive3 ? "notwhite6" : "white6"}>Dogecoin</p>
                </Col>

                <Col className='col-md-2 tc text-center shadow-5 pt-5 pb-5 me-4 ms-4 mt-4 mb-4 col20 col28' onMouseEnter={ToggleClass7} onMouseLeave={ToggleClass8} onClick={changetoxmr} style={{'display':`${value738}`}}>
                    <img src='https://cryptologos.cc/logos/monero-xmr-logo.png' width={'90px'}/>
                    <h4 className={isActive4 ? "notwhite5" : "white5"}>XMR</h4>
                    <p className={isActive4 ? "notwhite6" : "white6"}>Monero</p>
                </Col>

                <Col className='col-md-2 tc text-center shadow-5 pt-5 pb-5 me-4 ms-4 mt-4 mb-4 col20 col30' onMouseEnter={ToggleClass9} onMouseLeave={ToggleClass10} onClick={changetobnb1} style={{'display':`${value740}`}}>
                    <img src='https://cryptologos.cc/logos/bnb-bnb-logo.png' width={'90px'}/>
                    <h4 className={isActive5 ? "notwhite5" : "white5"}>BNB</h4>
                    <p className={isActive5 ? "notwhite6" : "white6"}>Binance Coin</p>
                </Col>

                <Col className='col-md-2 tc text-center shadow-5 pt-5 pb-5 me-4 ms-4 mt-4 mb-4 col20 col31' onMouseEnter={ToggleClass11} onMouseLeave={ToggleClass12} onClick={changetobch1} style={{'display':`${value750}`}}>
                    <img src='https://cryptologos.cc/logos/bitcoin-cash-bch-logo.png' width={'90px'}/>
                    <h4 className={isActive6 ? "notwhite5" : "white5"}>BCH</h4>
                    <p className={isActive6 ? "notwhite6" : "white6"}>Bitcoin Cash</p>
                </Col>
                
                <Col className='col-md-2 tc text-center shadow-5 pt-5 pb-5 me-4 ms-4 mt-4 mb-4 col20 col32' onMouseEnter={ToggleClass13} onMouseLeave={ToggleClass14} onClick={changetodash1} style={{'display':`${value760}`}}>
                <img src='https://seeklogo.com/images/D/dash-logo-4A14989CF5-seeklogo.com.png' width={'70px'}/>
                <h4 className={isActive7 ? "notwhite5" : "white5"}>DASH</h4>
                <p className={isActive7 ? "notwhite6" : "white6"}>Dash</p>
                </Col>
                
                <Col className='col-md-2 tc text-center shadow-5 pt-5 pb-5 me-4 ms-4 mt-4 mb-4 col20 col33' onMouseEnter={ToggleClass150} onMouseLeave={ToggleClass160} onClick={changetotrx1} style={{'display':`${value7610}`}}>
                <img src='https://cryptologos.cc/logos/tron-trx-logo.png?v=024' width={'70px'}/>
                <h4 className={isActive8 ? "notwhite5" : "white5"}>TRX</h4>
                <p className={isActive8 ? "notwhite6" : "white6"}>Tron (TRX) </p>
                </Col>
                
                <Col className='col-md-2 tc text-center shadow-5 pt-5 pb-5 me-4 ms-4 mt-4 mb-4 col20 col34' onMouseEnter={ToggleClass170} onMouseLeave={ToggleClass180} onClick={changetoavax1} style={{'display':`${value7610}`}}>
                <img src='https://cryptologos.cc/logos/avalanche-avax-logo.png?v=024' width={'70px'}/>
                <h4 className={isActive9 ? "notwhite5" : "white5"}>AVAX</h4>
                <p className={isActive9 ? "notwhite6" : "white6"}>Avalanche (AVAX) </p>
                </Col>
                
                
                <Col className='col-md-2 tc text-center shadow-5 pt-5 pb-5 me-4 ms-4 mt-4 mb-4 col20 col35' onMouseEnter={ToggleClass190} onMouseLeave={ToggleClass200} onClick={changetoada1} style={{'display':`${value7610}`}}>
                <img src='https://altcoinsbox.com/wp-content/uploads/2023/01/cardano-logo.jpg' width={'70px'}/>
                <h4 className={isActive10 ? "notwhite5" : "white5"}>ADA</h4>
                <p className={isActive10 ? "notwhite6" : "white6"}>Cardano</p>
                </Col>
                
                <Col className='col-md-2 tc text-center shadow-5 pt-5 pb-5 me-4 ms-4 mt-4 mb-4 col20 col36' onMouseEnter={ToggleClass210} onMouseLeave={ToggleClass220} onClick={changetovet1} style={{'display':`${value7610}`}}>
                <img src='https://cryptologos.cc/logos/vechain-vet-logo.png?v=024' width={'70px'}/>
                <h4 className={isActive11 ? "notwhite5" : "white5"}>VET</h4>
                <p className={isActive11 ? "notwhite6" : "white6"}>VeChain</p>
                </Col>

            </Row>

        </Modal.Body>
      </Modal>

      <Modal
        size="lg"
        show={lgShow3}
        fullscreen={fullscreen}
        onHide={() => setLgShow3(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
      <Modal.Header closeButton>
      <Modal.Title>
      <Row>
      <Col className='col-md-12 tc text-center'>
      <h3 className='b tc text-black'>YOU {lgShow2} </h3>
      </Col>
      </Row>
      </Modal.Title>
      </Modal.Header>
        <Modal.Body >
            <Row>
                <Col className='col-md-12 tc text-center'>
                    <p className="b text-black tc text-center para300 mt-0">Choose your</p>
                </Col>
            </Row>

            <Row>
                <Col className='col-md-12 tc text-center'>
                    <p className="b text-black tc text-center para200 mt-0">Crypto to {lgShow2}</p>
                </Col>
            </Row>

            <Row className='justify-content-center align-items-center'>

                <Col className='col-md-2 tc text-center shadow-5 pt-5 pb-5 me-4 ms-4 mt-4 mb-4 col20 col21' onMouseEnter={ToggleClass} onMouseLeave={ToggleClass2} onClick={changetobtc4} style={{'display':`${value74}`}}>
                    <img src='https://cryptologos.cc/logos/bitcoin-btc-logo.png' width={'90px'}/>
                    <h4 className={isActive ? "notwhite1" : "white1"}>BTC</h4>
                    <p className={isActive ? "notwhite2" : "white2"}>Bitcoin</p>
                </Col>

                <Col className='col-md-2 tc text-center shadow-5 pt-5 pb-5 me-4 ms-4 mt-4 mb-4 col20 col22' onMouseEnter={ToggleClass3} onMouseLeave={ToggleClass4} onClick={changetoltc4} style={{'display':`${value75}`}}>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LTC-400.png/2048px-LTC-400.png' width={'90px'}/>
                    <h4 className={isActive2 ? "notwhite3" : "white3"}>LTC</h4>
                    <p className={isActive2 ? "notwhite4" : "white4"}>Litecoin</p>
                </Col>

                <Col className='col-md-2 tc text-center shadow-5 pt-5 pb-5 ps-0 pe-0 me-4 ms-3 mt-4 mb-4 col20 col23' onMouseEnter={ToggleClass5} onMouseLeave={ToggleClass6} onClick={changetodoge4} style={{'display':`${value76}`}}>
                    <img src='https://cryptologos.cc/logos/dogecoin-doge-logo.png' width={'90px'}/>
                    <h4 className={isActive3 ? "notwhite5" : "white5"}>DOGE</h4>
                    <p className={isActive3 ? "notwhite6" : "white6"}>Dogecoin</p>
                </Col>
            </Row>

        </Modal.Body>
      </Modal>
    </Container>
            </article>
            </div>
            </article>
            <Row className='d-flex row589 justify-content-center align-items-center'>
            <Col className='col-md-12'>
            <h2 className='tc b mt-4 text-center'>How to Exchange Crypto</h2>
            <p className='tc text-cente br'>Exchanging crypto is simple & easy on Bitbarter.</p>
            <p className='tc text-center'>Follow the four steps</p>
            <Row className='d-flex row589 justify-content-center align-items-center tc text-center'>
            <Col className='col-md-3 mt-4 mb-4'>
            
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="bi mt-3 mb-3 bi-hand-index-thumb-fill" viewBox="0 0 16 16">
            <path d="M8.5 1.75v2.716l.047-.002c.312-.012.742-.016 1.051.046.28.056.543.18.738.288.273.152.456.385.56.642l.132-.012c.312-.024.794-.038 1.158.108.37.148.689.487.88.716.075.09.141.175.195.248h.582a2 2 0 0 1 1.99 2.199l-.272 2.715a3.5 3.5 0 0 1-.444 1.389l-1.395 2.441A1.5 1.5 0 0 1 12.42 16H6.118a1.5 1.5 0 0 1-1.342-.83l-1.215-2.43L1.07 8.589a1.517 1.517 0 0 1 2.373-1.852L5 8.293V1.75a1.75 1.75 0 0 1 3.5 0z"/>
            </svg>
            <h6>Choose the crypto you like to receive</h6>
            </Col>
            <Col className='col-md-3 mt-4 mb-4'>
            
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="bi mt-3 mb-3 bi-wallet2" viewBox="0 0 16 16">
            <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484L5.562 3zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z"/>
            </svg>
            <h6>Enter your crypto wallet address</h6>
            </Col>
            <Col className='col-md-3 mt-4 mb-4'>
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="mt-3 mb-3 bi bi-cursor-fill" viewBox="0 0 16 16">
            <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"/>
            </svg>
            <h6>Click on Exchange</h6>
            </Col>
            <Col className='col-md-3 mt-4 mb-4'>
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="mt-3 mb-3 bi bi-currency-dollar" viewBox="0 0 16 16">
            <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z"/>
            </svg>
            <h6>Receive your crypto in seconds</h6>
            </Col>
            </Row>
            </Col>
            </Row>
        </div>
    )
}

export default Main1
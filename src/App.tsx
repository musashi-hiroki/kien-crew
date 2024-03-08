import { Col, Container, Nav, Navbar, Row } from "react-bootstrap"
import "./App.css"
import { useEffect, useRef, useState } from "react"

import "bootstrap/dist/css/bootstrap.min.css";
import Top from "./page/Top";
import WhatsUp from "./page/WhatsUs";
import Profile from "./page/Profile";

function App() {
  const [page, setPage] = useState<JSX.Element>(<Top/>)
  const [navbarHeight, setNavbarHeight] = useState<number>(0)
  const navbarRef = useRef<HTMLDivElement>(null)
  const [expanded, setExpanded] = useState<boolean>(false)
  useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  },[])
  useEffect(() => {
      setTimeout(() => {
        if(navbarRef.current){
          setNavbarHeight(navbarRef.current.offsetHeight)
        }
      },100)
    },[navbarRef])
  function onResize(){
    if(navbarRef.current){
      setNavbarHeight(navbarRef.current.offsetHeight)
    }
  }
  return (
    <div style={{marginTop: navbarHeight}}>
      <Navbar id="header" ref={navbarRef} expand="sm" fixed="top" expanded={expanded} className="bg-black">
        <img id="logo" className="m-2" style={{cursor: "pointer"}} src="/src/assets/logo.png" width="8%" height="8%" onClick={() => {setPage(<Top/>)}}/>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => {setExpanded(!expanded)}}/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto" style={{fontSize: "20px"}}>
            <Nav.Link onClick={() => {setPage(<WhatsUp/>), setExpanded(!expanded)}}>what`s us</Nav.Link>
            <Nav.Link onClick={() => {setPage(<Profile/>), setExpanded(!expanded)}}>profile</Nav.Link>
            <Nav.Link href="#pricing">contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container fluid className="p-0">
        <Row className="justify-content-md-center">
          <Col className="text-center">
            {page}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App

import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

const NavbarElemnet = () => {
  return (
    <Navbar collapseOnSelect expand='lg' className='bg-body-tertiary'>
      <Container>
        <Navbar.Brand href='/'>아이캔투잇</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='conversation'>리딩</Nav.Link>
            <Nav.Link href='sentence'>퀴즈</Nav.Link>
            <Nav.Link href='sentence'>리스닝</Nav.Link>
            <Nav.Link href='sentence'>스피킹</Nav.Link>
            <Nav.Link href='sentence'>의견</Nav.Link>
            <Nav.Link href='sentence'>학습현황</Nav.Link>
            <NavDropdown title='다른 사이트' id='collapsible-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'>세 얼간이</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>
                아크틱플라워
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>박지욱</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action/3.4'>
                지은이 박동훈
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href='#deets'>로그인</Nav.Link>
            <Nav.Link eventKey={2} href='#memes'>
              환경설정
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarElemnet;

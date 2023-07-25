import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import useLocales from '../hooks/useLocales';
import StartLogo from './StartLogo';
import './StartModal.css'

function StartModal() {
  const langStorage = localStorage.getItem('i18nextLng');
  const [show, setShow] = useState(langStorage ? false : true);
  const { allLangs, onChangeLang } = useLocales();

  const handleClose = () => setShow(false);
  const handleClick = (value) => {
    handleClose();
    onChangeLang(value);
  }

  return (
    <>
      <Modal show={show} onHide={handleClose} style={{ background: 'white' }} fullscreen>
        <Modal.Body style={{ textAlign: 'center', justifyContent: 'center' }}>
            <Col className='mt-2'>
                <Row style={{alignItems: 'center', justifyItems: 'center'}} className="md-5">
                    <StartLogo />
                </Row>
                <Row style={{justifyContent: 'space-between', justifySelf: 'center', paddingRight: '20%', paddingLeft: '20%'}}>
                  {allLangs.map((lang) => (
                    <Button onClick={() => handleClick(lang.value)} style={{width: '26%', backgroundColor: 'white', borderWidth: 2, borderColor: '#5375BA', borderRadius: 10}}>
                      <text style={{fontWeight: 'lighter', fontSize: 20, color: '#5375BA'}}>{lang.label}</text>
                    </Button>
                  ))}
                </Row>
            </Col>
            
        </Modal.Body>
      </Modal>
    </>
  );
}

export default StartModal;
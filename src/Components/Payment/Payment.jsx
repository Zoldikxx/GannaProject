import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

const PaymentPage = () => {
    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md={8}>
                    <Card>
                        <Card.Header>
                            <Row>
                                <Col md={6}>
                                    <span>CREDIT/DEBIT CARD PAYMENT</span>
                                </Col>
                                <Col md={6} className="text-right">
                                    <img src="https://img.icons8.com/color/36/000000/visa.png" alt="Visa" />
                                    <img src="https://img.icons8.com/color/36/000000/mastercard.png" alt="Mastercard" />
                                    <img src="https://img.icons8.com/color/36/000000/amex.png" alt="American Express" />
                                </Col>
                            </Row>
                        </Card.Header>
                        <Card.Body>
                            <Form>
                                <Form.Group>
                                    <Form.Label>CARD NUMBER</Form.Label>
                                    <Form.Control type='tel' placeholder='ex. 1234 5678 9012 3456' required />
                                    </Form.Group>
                                <br />
                                <Row>
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>CARD EXPIRY</Form.Label>
                                            <Form.Control type="tel" placeholder='ex. 01/23' required />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>CARD CVC</Form.Label>
                                            <Form.Control type="tel" placeholder="••••" required />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <br />
                                <Form.Group>
                                    <Form.Label>CARD HOLDER NAME</Form.Label>
                                    <Form.Control type="text" required />
                                </Form.Group>
                                <br />

                                <Button variant="success" type="submit" className="btn-lg btn-block">MAKE PAYMENT</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default PaymentPage;

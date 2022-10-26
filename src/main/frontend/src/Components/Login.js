import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";

export default function Login(props) {

    return(
        <Modal show={props.show} onHide={props.setModal}>
            <Modal.Header closeButton>Login</Modal.Header>
            <Modal.Footer>
                <Button variant="primary" onClick={props.setModal}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}
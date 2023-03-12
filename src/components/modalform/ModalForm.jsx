import 'bootstrap/dist/css/bootstrap.min.css'
import Modal from 'react-bootstrap/Modal'
import {Button} from "react-bootstrap";
import SearchForm from "../searchform";

const handleSubmit = () => {
    alert("handleSubmit clicked");
}

function ModalForm(props)  {

    return (
        <Modal show={props.showModalForm} onHide={props.hideModalForm}>
            <Modal.Header closeButton>
                <Modal.Title> Modal Title </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <SearchForm />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleSubmit}> Submit </Button>
            </Modal.Footer>
        </Modal>
    );
}

export {ModalForm}
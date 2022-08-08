import React, { useState, useEffect } from 'react';
import userService from '../../services/user.service';
// Import Components
import { Row, Col, Card, Form, Button } from "react-bootstrap";

import toast, { Toaster } from 'react-hot-toast';

import { useHistory } from 'react-router-dom';



function AddStudent() {
    const history = useHistory()
    const [firstNameClassName, setFirstNameClassName] = useState("form-control is-invalid")
    const [lastNameClassName, setLastNameClassName] = useState("form-control is-invalid")
    const [birthDateClassName, setBirthDateClassName] = useState("form-control is-invalid")
    const [emailClassName, setEmailClassName] = useState("form-control is-invalid")
    const [passwordClassName, setPasswordClassName] = useState("form-control is-invalid")
    const [niveauClassName, setNiveauClassName] = useState("form-control is-invalid")
    const [classeClassName, setClasseClassName] = useState("form-control is-invalid")
    const [etatPaiementClassName, setEtatPaiementClassName] = useState("form-control is-invalid")
    const [phoneNumberClass, setPhoneNumberClass] = useState("form-control is-invalid")
    const [imageClass, setImageClass] = useState("form-control is-invalid")


    const [phoneNumber, setPhoneNumber] = useState(0)
    const [firstname, setFirstName] = useState("")
    const [lastname, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [birthDate, setBirthDate] = useState("")
    const [niveau, setNiveau] = useState("")
    const [classe, setClasse] = useState("")
    const [etatPaiement, setEtatPaiement] = useState("")
    const [image, setImage] = useState()


    useEffect(() => {
    }, [])

    useEffect(() => {
        if (niveau === "" || niveau === null || niveau === undefined) {
            setNiveauClassName("form-control is-invalid")
        }
        else {
            setNiveauClassName("form-control is-valid")
        }
        console.log(niveau)
    }, [niveau])

    useEffect(() => {
        if (image != null) {
            setImageClass("form-control is-valid")
        } else {
            setImageClass("form-control is-invalid")
        }
    }, [image])

    useEffect(() => {
        if (isValidNumber(phoneNumber)) {
            setPhoneNumberClass("form-control is-valid")
        } else {
            setPhoneNumberClass("form-control is-invalid")
        }
    }, [phoneNumber])

    useEffect(() => {
        if (classe === "" || classe === null || classe === undefined) {
            setClasseClassName("form-control is-invalid")
        }
        else {
            setClasseClassName("form-control is-valid")
        }
        console.log(classe)
    }, [classe])

    useEffect(() => {
        if (etatPaiement === "" || etatPaiement === null || etatPaiement === undefined) {
            setEtatPaiementClassName("form-control is-invalid")
        }
        else {
            setEtatPaiementClassName("form-control is-valid")
        }
        console.log(etatPaiement)
    }, [etatPaiement])

    useEffect(() => {
        if (firstname === "" || firstname === null || firstname === undefined || firstname.length < 3) {
            setFirstNameClassName("form-control is-invalid")
        }
        else {
            setFirstNameClassName("form-control is-valid")
        }
        console.log(firstname)
    }, [firstname])

    useEffect(() => {
        if (lastname === "" || lastname === null || lastname === undefined || lastname.length < 3) {
            setLastNameClassName("form-control is-invalid")
        }
        else {
            setLastNameClassName("form-control is-valid")
        }
        console.log(lastname)
    }, [lastname])

    useEffect(() => {
        if (birthDate === "" || birthDate === null || birthDate === undefined) {
            setBirthDateClassName("form-control is-invalid")
        }
        else {
            setBirthDateClassName("form-control is-valid")
        }
        console.log(birthDate)
    }, [birthDate])

    useEffect(() => {
        if (!isValidEmail(email)) {
            setEmailClassName("form-control is-invalid")
        }
        else {
            setEmailClassName("form-control is-valid")
        }
        console.log(email)
    }, [email])


    useEffect(() => {
        if (!isValidPassword(password)) {
            setPasswordClassName("form-control is-invalid")
        }
        else {
            setPasswordClassName("form-control is-valid")
        }
        console.log(password)
    }, [password])

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value)
    }

    const handleLastNameChange = (e) => {
        setLastName(e.target.value)
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handlephoneNumberChange = (e) => {
        setPhoneNumber(e.target.value)
    }

    const handleBirthDateChange = (e) => {
        setBirthDate(e.target.value)
    }

    const handleClasseChange = (e) => {
        setClasse(e.target.value)
    }

    const handleNiveauChange = (e) => {
        setNiveau(e.target.value)
    }

    const handleEtatPaiementChange = (e) => {
        setEtatPaiement(e.target.value)
    }

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }

    function isValidPassword(password) {
        return /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password)
    }

    function isValidNumber(number) {
        return /^[0-9]{8}$/.test(number)
    }

    const handleImageChange = (e) => {
        setImage(e.target.files[0])
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (firstNameClassName === "form-control is-invalid" || emailClassName === "form-control is-invalid" || passwordClassName === 'form-control is-invalid' || lastNameClassName === "form-control is-invalid" || birthDateClassName === "form-control is-invalid" || phoneNumberClass === "form-control is-invalid" || imageClass === "form-control is-invalid") {
            toast.error("There is an error. Please re-enter your information")
            console.log("a")
        } else {
            toast.success("Success. user must confirm his account via e-mail")
            userService.register(firstname, lastname, phoneNumber, birthDate, image, email, password, null)
            setTimeout(() => {
                history.push("/students")
            }, 3000);
        }
    }
    return (
        <div>
            <Toaster position="top-right"
                reverseOrder={false} />
            <div className="page-header">
                <Row>
                    <Col sm={12}>
                        <h3 className="page-title">Add Student</h3>
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item"><a href="">Students</a></li>
                            <li className="breadcrumb-item active">Edit Students</li>
                        </ul>
                    </Col>
                </Row>
            </div>

            <Row>
                <Col sm={12}>
                    <Card>
                        <Card.Body>
                            <Form>
                                <Row>
                                    <Col sm={12}>
                                        <h5 className="form-title"><span>Student Information</span></h5>
                                    </Col>

                                    <Col xs={12} sm={6}>
                                        <Form.Group>
                                            <Form.Label>First Name</Form.Label>
                                            <Form.Control type="text" className={firstNameClassName} defaultValue={firstname} onChange={handleFirstNameChange} />
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12} sm={6}>
                                        <Form.Group>
                                            <Form.Label>Last Name</Form.Label>
                                            <Form.Control type="text" className={lastNameClassName} defaultValue={lastname} onChange={handleLastNameChange} />
                                        </Form.Group>
                                    </Col>

                                    <Col xs={12} sm={6}>
                                        <Form.Group>
                                            <Form.Label>Date of Birth</Form.Label>
                                            <Form.Control type="date" className={birthDateClassName} defaultValue={birthDate} onChange={handleBirthDateChange} />
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12} sm={6}>
                                        <Form.Group>
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control type="text" className={emailClassName} defaultValue={email} onChange={handleEmailChange} required />
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12} sm={6}>
                                        <Form.Group>
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="text" className={passwordClassName} defaultValue={password} onChange={handlePasswordChange} required />
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12} sm={6}>
                                        <Form.Group>
                                            <Form.Label>Niveau</Form.Label>
                                            <Form.Control type="text" className={niveauClassName} defaultValue={niveau} onChange={handleNiveauChange} required />
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12} sm={6} >
                                        <Form.Group>
                                            <Form.Label>Etat Paiement</Form.Label>
                                            <select className={etatPaiementClassName} onChange={handleEtatPaiementChange}>
                                                <option>-- Select --</option>
                                                <option>Annuelle</option>
                                                <option>Semestrielle</option>
                                                <option>Trimestrielle</option>
                                                <option>Mensuelle</option>
                                            </select>
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12} sm={6}>
                                        <Form.Group>
                                            <Form.Label>Classe</Form.Label>
                                            <Form.Control type="text" className={classeClassName} defaultValue={classe} onChange={handleClasseChange} required />
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12} sm={6}>
                                        <Form.Group>
                                            <Form.Label>Phone Number</Form.Label>
                                            <Form.Control type="text" className={phoneNumberClass} defaultValue={phoneNumber} onChange={handlephoneNumberChange} required />
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12} sm={6}>
                                        <Form.Group>
                                            <Form.Label>Agent Image</Form.Label>
                                            <Form.File type="file" className={imageClass} onChange={handleImageChange} />
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12}>
                                        <Button variant="primary" type="submit" onClick={handleSubmit}>
                                            Submit
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default AddStudent
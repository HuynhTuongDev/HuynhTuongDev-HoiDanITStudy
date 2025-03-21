import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FcPlus } from 'react-icons/fc';
import { toast } from 'react-toastify';
import { postCreateNewUser, putUpdateUser } from '../../../services/apiService';
import _ from 'lodash';
const ModalUpdateUser = (props) => {
    const { show, setShow, dataUpdate } = props;

    const handleClose = () => {
        setShow(false)
        setEmail("")
        setPassword("")
        setUsername("")
        setRole("USER")
        setImage("")
        setPreviewImage("")
        props.resetUpdateData()
    };

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [role, setRole] = useState("USER");
    const [image, setImage] = useState("");
    const [previewImage, setPreviewImage] = useState("");

    useEffect(() => {
        console.log('run useEffect', dataUpdate)
        if (!_.isEmpty(dataUpdate)) {
            //update state
            setEmail(dataUpdate.email)
            setPassword(dataUpdate.password)
            setUsername(dataUpdate.username)
            setRole(dataUpdate.role)
            setImage("")
            setPreviewImage(`data:image/jpeg;base64,${dataUpdate.image}`)
        }
    }, [dataUpdate]);

    const handleUploadFileImage = (event) => {
        if (event.target && event.target.files && event.target.files[0]) {
            setPreviewImage(URL.createObjectURL(event.target.files[0]))
            setImage(event.target.files[0]);
        } else {
            // setPreviewImage("");
        }
    }

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };
    const handleSubmitUpdateUser = async () => {
        //validate
        const isValidEmail = validateEmail(email);
        if (!isValidEmail) {
            toast.error('Invalid email');
            return;
        }

        let data = await putUpdateUser(dataUpdate.id, username, role, image);
        if (data && data.EC == 0) {
            toast.success(data.EM);
            handleClose();
            // props.setCurrentPage(1);
            await props.fetchListUserWithPaginate(props.currentPage);
            // await props.fetchListUser();
        }
        if (data && data.EC !== 0) {
            toast.error(data.EM);
        }
    }
    console.log('check render dataUpdate', dataUpdate);
    return (
        <>
            {/* <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button> */}
            <Modal
                show={show}
                onHide={handleClose}
                size='xl'
                backdrop='static'
                className='modal-add-user'
            >
                <Modal.Header closeButton>
                    <Modal.Title>Update a user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" disabled value={email} onChange={(event) => setEmail(event.target.value)} />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" disabled value={password} onChange={(event) => setPassword(event.target.value)} />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">User Name</label>
                            <input type="text" className="form-control" value={username} onChange={(event) => setUsername(event.target.value)} />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Role</label>
                            <select className="form-select" value={role} onChange={(event) => setRole(event.target.value)}>
                                <option default value='USER'>USER</option>
                                <option value='ADMIN'>ADMIN</option>
                            </select>
                        </div>
                        <div className="col-md-12">
                            <label className="form-label label-upload" htmlFor='labelUpload'>
                                <FcPlus />
                                Upload File Image
                            </label>
                            <input type="file" hidden id='labelUpload' onChange={(event) => handleUploadFileImage(event)} />
                        </div>
                        <div className="col-md-12 img-preview">
                            {previewImage ? <img src={previewImage} /> : <span >Preview Image</span>}
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmitUpdateUser}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default ModalUpdateUser;

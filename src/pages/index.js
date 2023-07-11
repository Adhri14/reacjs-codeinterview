import React, { useState } from "react";
import NavbarCustom from "../components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal } from "react-bootstrap";

function Route() {
    const [textInsertData, setTextInsertData] = useState("");
    const [data, setData] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [dataUpdate, setDataUpdate] = useState();

    const onSubmit = () => {
        setTextInsertData("");
        setData([{ id: Date.now(), name: textInsertData }, ...data]);
    };

    const onRemoveItem = (value) => {
        console.log(value);
        const newData = data.filter((item) => item?.id !== value?.id);
        setData(newData);
    };

    const onUpdateItem = () => {
        const newData = data.map((item) => {
            if (item?.id === dataUpdate?.id) {
                return {
                    ...item,
                    name: dataUpdate?.name,
                };
            }
        });
        console.log("update : ", newData);
        // setData([newData, ...data]);
        // setShowModal(!showModal);
    };

    console.log("cek ", dataUpdate);

    return (
        <>
            <NavbarCustom />
            <div className="container">
                <div className="row mt-5">
                    <h3 className="fs-4 mb-3">Create Data</h3>
                    <div className="col-lg-6">
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Create Data"
                                aria-label="Recipient's username"
                                aria-describedby="create"
                                value={textInsertData}
                                onChange={(event) =>
                                    setTextInsertData(event.target.value)
                                }
                            />
                            <button
                                className="btn btn-dark"
                                type="button"
                                id="create"
                                onClick={onSubmit}
                            >
                                Button
                            </button>
                        </div>
                        <ul className="list-group">
                            {data.length ? (
                                data.map((item, index) => (
                                    <li
                                        key={item.id.toString()}
                                        className="list-group-item"
                                    >
                                        <div className="d-flex justify-content-between items-center">
                                            <p className="mt-3">{item?.name}</p>
                                            <div className="d-flex">
                                                <button
                                                    type="button"
                                                    className="badge bg-info"
                                                    style={{
                                                        border: "none",
                                                        width: "100px",
                                                        marginRight: "10px",
                                                    }}
                                                    onClick={() => {
                                                        setShowModal(
                                                            !showModal
                                                        );
                                                        setDataUpdate(item);
                                                    }}
                                                >
                                                    Update
                                                </button>
                                                <button
                                                    type="button"
                                                    className="badge bg-danger"
                                                    style={{
                                                        border: "none",
                                                        width: "100px",
                                                    }}
                                                    onClick={() =>
                                                        onRemoveItem(item)
                                                    }
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                ))
                            ) : (
                                <li className="list-group-item">
                                    Data is empty
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
                <Modal show={showModal} onHide={() => setShowModal(!showModal)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Update</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Create Data"
                                aria-label="Recipient's username"
                                aria-describedby="create"
                                value={dataUpdate?.name}
                                onChange={(event) =>
                                    setDataUpdate({
                                        ...dataUpdate,
                                        name: event.target.value,
                                    })
                                }
                            />
                            <button
                                className="btn btn-dark"
                                type="button"
                                id="create"
                                onClick={() => onUpdateItem()}
                            >
                                Button
                            </button>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button
                            variant="secondary"
                            onClick={() => setShowModal(!showModal)}
                        >
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    );
}

export default Route;

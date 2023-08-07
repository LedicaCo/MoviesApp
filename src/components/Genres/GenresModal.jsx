import "../../assets/css/genresModal.css";
import React, { useState } from "react";
import { Button, Col, Form, InputGroup, Modal, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addGenreThunk } from "../../store/slices/genres.slice";
import GenreItem from "./GenreItem";

const GenresModal = ({ show, handleClose }) => {
  const genres = useSelector((state) => state.genres);
  const [newGenre, setNewGenre] = useState("");

  const dispatch = useDispatch();

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header /* closeButton */>
        <Modal.Title className="modal__title">Handle genres</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <InputGroup className="mb-3 ">
          <Form.Control
            className="bg-input"
            placeholder="New genre"
            value={newGenre}
            onChange={(e) => setNewGenre(e.target.value)}
          />
          <Button
            variant="outline-success"
            onClick={() => dispatch(addGenreThunk(newGenre))}
          >
            Add
          </Button>
        </InputGroup>
        <ul className="genres-list">
          {genres.map((genre) => (
            <GenreItem genre={genre} key={genre.id} />
          ))}
        </ul>
      </Modal.Body>
      <>
      <div className="divider"></div>
        <div className="footer-modal">
          <Button
            /* variant="secondary" */ className="genre-close-btn"
            onClick={handleClose}
          >
            Close
          </Button>
        </div>
      </>
    </Modal>
  );
};

export default GenresModal;

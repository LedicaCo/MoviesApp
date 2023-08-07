import '../assets/css/actor.css';
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import ActorCard from '../components/Actors/ActorCard';
import ActorsForm from '../components/Actors/ActorsForm';
import getOneProperty from '../utils/getOneProperty';

const Actors = () => {

    const actors = useSelector(state => state.actors);

    const [showActorsForm, setShowActorsForm] = useState(false);
    const [ actorSelected, setActorSelected ] = useState(null);
    const [ actorsFiltered, setActorsFiltered ] = useState([])
    useEffect(() => setActorsFiltered(actors), [actors]);

    const nationalities = getOneProperty(actors, "nationality");
    
    const filterNationality = nationality => {
        const filtered = actors.filter(
            actor => actor.nationality === nationality
        );
        setActorsFiltered(filtered);
    }

    const selectActor = actor => {
        setActorSelected(actor);
        setShowActorsForm(true);
    }

    const closeForm = () => {
        setActorSelected(null);
        setShowActorsForm(false);
    }

    return (
        <>
            <Row>
                <Col md={3} xl={2}>
                    <h5 className='filter-title'>Filter by nationality</h5>
                    <ul className='filter-list'>
                        {nationalities.map(nationality => (
                            <li 
                                className='filter-option' 
                                key={nationality} 
                                onClick={() => filterNationality(nationality)}
                            >
                                {nationality}
                            </li>
                        ))}
                    </ul>
                </Col>
                <Col>
                    <div className="d-flex justify-content-between align-items-start mb-3">
                        <h1 className='actors-title'>Actors</h1>
                        <Button
                            /* variant="success" */ className='add-actor'
                            onClick={() => setShowActorsForm(true)}
                        >
                            Add actor
                        </Button>
                    </div>
                    <Row xs={1} md={2} lg={3} xl={4} className="g-4">
                        {actorsFiltered.map((actor) => (
                            <ActorCard actor={actor} key={actor.id} selectActor={selectActor} />
                        ))}
                    </Row>
                </Col>
            </Row>
            <ActorsForm 
                show={showActorsForm} 
                handleClose={closeForm} 
                actorSelected={actorSelected}
            />
        </>
    );
};

export default Actors;
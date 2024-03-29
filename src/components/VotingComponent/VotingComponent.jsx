import React, { useMemo, useState } from 'react';
import { Card, Col, Form, Row } from 'react-bootstrap';
import './VotingComponent.css'
import { Pie } from 'react-chartjs-2';

function VotingComponent({ voting, onAnswer, allVoting }) {
    // const [answer, setAnswer] = useState(null);
    //console.log(answer);

    const chartData = useMemo(() => {
        console.log("calculating chartData");
        let yes = 0;
        let no = 0;
        
        for (const vote of voting.votes) {
           

                if (vote.answer === 0) {
                    ++yes;
                } else {
                    ++no;
                }
           
        }
        return {
            labels: ['Yes', 'No'],
            datasets: [
                {
                    label: '# of options',
                    data: [yes, no],
                    backgroundColor: [
                        
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                    ],
                    borderColor: [
                       
                        'rgba(75, 192, 192, 1)',
                        'rgba(255, 99, 132, 1)',
                    ],
                    borderWidth: 1,
                },
            ],
        }
    }, [allVoting])




    return (

        <div className="c-voting">

            <Card className="voting-card">
                <Card.Header className="voting-title" as="h5">{voting.title}</Card.Header>
                <Card.Body className="voting-body">
                    <Card.Title>{voting.details}</Card.Title>
                    <Form>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalVoiting">
                            
                            <Col sm={10}>
                                <div key="radio" className="mb-3">
                                    <Form.Check
                                        inline
                                        label={voting.options[0]}
                                        name="group1"
                                        type="radio"
                                        id={`${voting.id}-1`}
                                        onClick={() => onAnswer(voting, 0)}
                                    />
                                    <Form.Check
                                        inline
                                        label={voting.options[1]}
                                        name="group1"
                                        type="radio"
                                        id={`${voting.id}-2`}
                                        onClick={() => onAnswer(voting, 1)}
                                    />
                                </div>
                            </Col>
                        </Form.Group>
                    </Form>

                    <div className="chart-pie">
                        <Pie data={chartData} />
                    </div>

                </Card.Body>
            </Card>

        </div>
    );
}

export default VotingComponent;
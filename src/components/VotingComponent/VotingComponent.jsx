import React, { useMemo, useState } from 'react';
import { Col, Form,Row } from 'react-bootstrap';
import './VotingComponent.css'
import { Pie } from 'react-chartjs-2';

function VotingComponent({ voting ,onAnswer, allVoting}) {
   // const [answer, setAnswer] = useState(null);
    //console.log(answer);

    const chartData = useMemo(() => {
        console.log("calculating chartData");
        let yes = 0;
        let no = 0;
        for (const voting of allVoting) {
            for (const voite of voting.votes) {

                if (voite.answer === 0) {
                    ++yes;
                } else {
                    ++no;
                }
            }
        }

        return {
            labels: ['Yes', 'No'],
            datasets: [
                {
                    label: '# of options',
                    data: [yes, no],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                    ],
                    borderWidth: 1,
                },
            ],
        }
    }, [allVoting])




    return (
        <div className="c-voting">

            <Form>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalVoiting">
                    <Form.Label column sm={10}>
                      <h5> { voting.title}</h5>
                    </Form.Label>
                    <Col sm={10}>  
                <div key="radio" className="mb-3">
                    <Form.Check
                        inline
                        label={voting.options[0]}
                        name="group1"
                        type="radio"
                        id="option-1"
                        onClick={()=>onAnswer(voting,0)}
                    />
                    <Form.Check
                        inline
                        label={voting.options[1]}
                        name="group1"
                        type="radio"
                        id="option-2"
                        onClick={()=>onAnswer(voting,1)}
                    />
                </div>
                </Col>
                </Form.Group>
            </Form>

            <div className="chart-pie">
                     <Pie data={chartData} />
             </div>
        </div>
    );
}

export default VotingComponent;
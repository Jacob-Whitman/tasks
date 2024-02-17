import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    //TODO:  Heading??? idk Also the red box, image and button
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1>header2</h1>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Jacob Whitman automatically. Hello World!
            </p>
            <Container>
                <Row>
                    <Col>
                        <img
                            src={require("./assets/he.jpg")}
                            alt="A picture of a he"
                        />
                        <div
                            style={{
                                width: "40px",
                                height: "40px",
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <ul>
                            <li>cats</li>
                            <li>cats</li>
                            <li>catssss</li>
                        </ul>
                        <div
                            style={{
                                width: "40px",
                                height: "40px",
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
            <Button
                className="button"
                name="Log Hello World"
                onClick={() => console.log("Hello World!")}
            >
                Log Hello World
            </Button>
        </div>
    );
}

export function farenheitToCelcius(degreesF: number): number {
    const degreesC: number = (degreesF - 32) * (5 / 9);
    console.log(degreesC);
    console.log(degreesF);
    return degreesC;
}

export function convertYesNo(ans) {
    ans = ans.toLowerCase();
    if (ans === "yes") {
        return true;
    } else if (ans === "no") {
        return false;
    }
    return undefined;

}

export default App;

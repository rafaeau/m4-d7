import React from 'react'
import SingleBook from './SingleBook'
import CommentArea from './CommentArea'
import { Col, Container, Form, Row } from 'react-bootstrap'

class BookList extends React.Component {

    state = {
        searchQuery: '',
        clickedBook: null
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col md={9}>
                        <Row>
                            <Col>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Search</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Search here"
                                        value={this.state.searchQuery}
                                        onChange={e => this.setState({ searchQuery: e.target.value })}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            {
                                this.props.books.filter(b => b.title.toLowerCase().includes(this.state.searchQuery)).map(b => (
                                    <Col xs={3} key={b.asin} >
                                        <SingleBook book={b} alterClickedBook={asin => this.setState({
                                            clickedBook: asin
                                        })} />
                                    </Col>
                                ))
                            }
                        </Row>
                    </Col>
                    <Col md={3}>
                        <CommentArea asin={this.state.clickedBook} />
                    </Col>
                </Row>
            </Container>
        )
    }

}

export default BookList
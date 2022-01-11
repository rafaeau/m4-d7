import { useState } from 'react'
import SingleBook from './SingleBook'
import CommentArea from './CommentArea'
import { Col, Container, Form, Row } from 'react-bootstrap'

const BookList = ({books}) => {

    const [searchQuery, setSearchQuery] = useState('')
    const [clickedBook, setClickedBook] = useState(null)

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
                                    value={searchQuery}
                                    onChange={e => setSearchQuery(e.target.value)}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        {
                            books.filter(b => b.title.toLowerCase().includes(searchQuery)).map(b => (
                                <Col xs={3} key={b.asin} >
                                    <SingleBook book={b} alterClickedBook={asin => setClickedBook(asin)} />
                                </Col>
                            ))
                        }
                    </Row>
                </Col>
                <Col md={3}>
                    <CommentArea asin={clickedBook} />
                </Col>
            </Row>
        </Container>
    )
}

export default BookList
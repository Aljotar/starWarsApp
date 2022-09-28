import React from 'react'
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

export const SearchInput = () => {
  return (
    <InputGroup size="sm" className="mb-3">
    <InputGroup.Text id="inputGroup-sizing-sm">Small</InputGroup.Text>
    <Form.Control
      aria-label="Small"
      aria-describedby="inputGroup-sizing-sm"
    />
  </InputGroup>
  )
}

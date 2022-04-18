import React from "react"
import { useState } from "react"
import { graphql, Link } from "gatsby"
import Layout from '../components/Layout'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export default function Home({ data }) {
  console.log(data)
  const allPost = data.allCustomApi.nodes
  // const {title, description} = data.site.siteMetadata
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Layout>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <Button variant="secondary" className="btn-secondary">Secondary</Button>{' '}
      <Button variant="success">Success</Button>{' '}
      <Button variant="warning">Warning</Button>{' '}
      <Button variant="danger">Danger</Button> <Button variant="info">Info</Button>{' '}
      <Button variant="light">Light</Button> <Button variant="dark">Dark</Button>{' '}
      <Button variant="link">Link</Button>
      <Button variant="outline-primary">Primary</Button>{' '}
      <Button variant="outline-secondary">Secondary</Button>{' '}
      <Button variant="outline-success">Success</Button>{' '}
      <Button variant="outline-warning">Warning</Button>{' '}
      <Button variant="outline-danger">Danger</Button>{' '}
      <Button variant="outline-info">Info</Button>{' '}
      <Button variant="outline-light">Light</Button>{' '}
      <Button variant="outline-dark">Dark</Button>
      <h2>This is home page</h2>
      <p>Anim deserunt quis sint aliqua elit.</p>
      {allPost.map((post, index) => {
        return (
          <p key={index}>
            {post.title}
          </p>
        )
      })}
    </Layout>
  )
}

export const query = graphql`
query Post {
  allCustomApi {
    nodes {
      body
      title
    }
  }
}
`
// export const query = graphql`
// query siteInfo {
//   site {
//     siteMetadata {
//       title
//       description
//     }
//   }
// }
// `

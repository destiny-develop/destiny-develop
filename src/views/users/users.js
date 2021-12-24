import React, { useState } from 'react';
import { Row, Col, Card, Button, Modal } from 'react-bootstrap';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import useCustomLayout from 'hooks/useCustomLayout';
import { MENU_PLACEMENT, LAYOUT } from 'constants.js';

const ManageUsers = () => {
  const title = 'Manage Users';
  const description = 'An empty page with a boxed horizontal layout.';

  const breadcrumbs = [{ to: '', text: 'Home' }];

  const [exampleModal, setExampleModal] = useState(false);

  useCustomLayout({ placement: MENU_PLACEMENT.Horizontal, layout: LAYOUT.Boxed });

  return (
    <>
      <HtmlHead title={title} description={description} />
      <Row>
        <Col>
          {/* Title Start */}
          <section className="scroll-section" id="title">
            <div className="page-title-container">
              <h1 className="mb-0 pb-0 display-4">{title}</h1>
              <BreadcrumbList items={breadcrumbs} />
            </div>
            <Card className="mb-5" body>
              <Card.Text>{description}</Card.Text>

               {/* Default Start */}
          <section className="scroll-section" id="default">
            <h2 className="small-title">Default</h2>
            <Card body className="mb-5">
              <Button variant="outline-primary" onClick={() => setExampleModal(true)}>
                Launch demo modal
              </Button>
              <Modal show={exampleModal} onHide={() => setExampleModal(false)}>
                <Modal.Header closeButton>
                  <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>...</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={() => setExampleModal(false)}>
                    Close
                  </Button>
                  <Button onClick={() => setExampleModal(false)}>Save changes</Button>
                </Modal.Footer>
              </Modal>
            </Card>
          </section>
          {/* Default End */}

            </Card>
          </section>
          {/* Title End */}
        </Col>
      </Row>
    </>
  );
};

export default ManageUsers;

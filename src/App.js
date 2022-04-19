import React from "react";
import PropertyList from "./components/userlist";
import UniqueID from "react-html-id";

import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Table,
  ButtonGroup,
  Modal,
} from "react-bootstrap";

class App extends React.Component {
  constructor(props) {
    super(props);
    UniqueID.enableUniqueIds(this);
    this.state = {
      id: this.nextUniqueId(),
      Name: "",
      Property: "",
      Size: "",

      Description: "",
      modalShow: false,
      showPropId: 0,
      data: [
        {
          id: this.nextUniqueId(),
          Name: "shivraj",
          Property: "Flat",
          Size: "4bhk",

          Description: "Good Flat",
        },
        {
          id: this.nextUniqueId(),
          Name: "shivraj",
          Property: "Plot",
          Size: "4x7",

          Description: "Bad Plot",
        },
      ],
    };
    this.initialstate = {
      id: this.nextUniqueId(),
      Name: "",
      Property: "",
      Size: "",

      Description: "",
    };
    this.HandleEvents = this.HandleEvents.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleProperty = this.deleProperty.bind(this);
    this.setModalShow = this.setModalShow.bind(this);
    this.setModalHide = this.setModalHide.bind(this);
  }
  setModalShow(id) {
    this.setState({
      modalShow: true,
      showPropId: id,
    });
  }
  setModalHide() {
    this.setState({
      modalShow: false,
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    const dataList = {
      id: this.nextUniqueId(),
      Name: this.state.Name,
      Property: this.state.Property,
      Size: this.state.Size,

      Description: this.state.Description,
    };
    this.setState({
      data: [...this.state.data, dataList],
    });
  }

  HandleEvents(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value,
    });
  }
  deleProperty(index, e) {
    const emp = Object.assign([], this.state.data);
    emp.splice(index, 1);
    this.setState({
      data: emp,
    });
  }
  render() {
    console.log(this.state.showPropId);
    const { showPropId } = this.state;

    return (
      <div className="App" style={{ marginTop: "40px", marginBottom: "40px" }}>
        {this.state.data.length ? (
          <Modal
            show={this.state.modalShow}
            onHide={this.setModalHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                {this.state.data[showPropId].Name +
                  " " +
                  this.state.data[showPropId].Property}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th style={{margin:"20px"}} >Name</th>
                    <th style={{margin:"20px"}}>Property</th>
                    <th style={{margin:"20px"}}>Size</th>

                    <th style={{margin:"20px"}}>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{margin:"20px"}}>{this.state.data[showPropId].Name}</td>
                    <td style={{margin:"20px"}}>{this.state.data[showPropId].Property}</td>
                    <td style={{margin:"20px"}}>{this.state.data[showPropId].Size}</td>

                    <td style={{margin:"20px"}}>{this.state.data[showPropId].Description}</td>
                  </tr>
                </tbody>
              </Table>
            </Modal.Body>
          </Modal>
        ) : (
          ""
        )}
        <Container style={{margin:"200px auto 200px 700px"}}>
          <Row>
            <Col lg={{ span: "8", offset: "2" }}>
              <PropertyList
                propertyData={this.state.data}
                deleProperty={this.deleProperty}
                viewProperty={this.setModalShow}
              />
            </Col>
            <Col style={{width: "400px",height: "600px"}} lg={{ span: "8", offset: "2" }}>
              <h3>Add Property</h3>
              <br />
              <Form style={{width: "300px",height: "300px",border: "1px solid black"}} onSubmit={this.handleSubmit}>
                <Form.Group style={{width: "100px", marginTop:"10px"}}>
                  <Form.Label>Name</Form.Label>
                  <Form.Control style={{width: "200px", marginLeft:"50px"}}
                    value={this.state.Name}
                    type="text"
                    name="Name"
                    placeholder="Name"
                    onChange={this.HandleEvents}
                  />
                </Form.Group>
                <Form.Group style={{width: "100px", marginTop:"10px"}} >
                  <Form.Label>Property</Form.Label>
                  <Form.Control style={{width: "200px", marginLeft:"50px"}}
                    type="text"
                    placeholder="Property Type"
                    name="Property"
                    value={this.state.Property}
                    onChange={this.HandleEvents}
                  />
                </Form.Group>
                <Form.Group style={{width: "100px", marginTop:"10px"}} >
                  <Form.Label>Size</Form.Label>
                  <Form.Control style={{width: "200px", marginLeft:"50px"}}
                    value={this.state.Size}
                    type="text"
                    name="Size"
                    placeholder="size"
                    onChange={this.HandleEvents}
                  />
                </Form.Group>

                <Form.Group style={{width: "100px", marginTop:"10px"}} >
                  <Form.Label>Description</Form.Label>
                  <Form.Control style={{width: "200px", marginLeft:"50px"}}
                    type="text"
                    placeholder="About Property"
                    name="Description"
                    value={this.state.Description}
                    onChange={this.HandleEvents}
                  />
                </Form.Group>
                <Button style={{width: "100px", marginTop:"10px"}} type="submit">Add Property</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default App;

import React from "react";
import {  Link } from "react-router-dom";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import FormLabel from 'react-bootstrap/esm/FormLabel';

const AccountTransactions = () => {
    return (
        <>
            <h3> Transfer Funds </h3>
            <Form>
            <FormLabel> Enter the Account details</FormLabel>
      <Row>
        <Col>
        <div class="form-floating mb-3">
  <input type="text" class="form-control" id="floatingInput" placeholder="enter valid account no"/>
 <label for="floatingInput">FROM </label>
</div>
        </Col>
        <Col>
        <div class="form-floating mb-3">
  <input type="text" class="form-control" id="floatingInput" placeholder="enter valid account no"/>
 <label for="floatingInput">TO</label>
</div>
        </Col>
      </Row>

      <div class="row mb-3">
    <label for="Amount" class="col-sm-2 col-form-label">Enter the Amount</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="amount"/>
    </div>
  </div>

  <div class="row mb-3">
    <label for="inputIFSC" class="col-sm-2 col-form-label">Enter the IFSC Code</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="UTIB00XXX"/>
    </div>
  </div>
  <fieldset class="row mb-3">
    <legend class="col-form-label col-sm-2 pt-0">Type of Account</legend>
    <div class="col-sm-10">
      <div class="form-check">
        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked/>
        <label class="form-check-label" for="gridRadios1">
          Savings
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"/>
        <label class="form-check-label" for="gridRadios2">
          Current
        </label>
      </div>
      </div>
      </fieldset>

      <button type="button" class="btn btn-primary" id="liveToastBtn">Send</button>

      </Form>

      



            <Link to="/login/welcome">Go to dashboard</Link>
        </>
    )
}
export default AccountTransactions;
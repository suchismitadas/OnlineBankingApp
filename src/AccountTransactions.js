import { useForm } from "react-hook-form";
// import { useNavigate, Link } from "react-router-dom";
// import { useAppState } from "./components/state";
import { Button, Field, Form, Input } from "./components/Forms";
import { Row, Col } from "react-bootstrap";
import { Sheet, CssVarsProvider } from "@mui/joy";
import Navbar from "./components/navbar";
import axios from "axios";
import { useState } from "react";

const AccountTransactions = () => {

// 
    const [success, setSuccess] = useState();
    const [error, setError] = useState({});
const [hasError, setHasError] = useState(false);
    // console.log(state);
    const { handleSubmit, register, formState: { errors } } = useForm();
    // const navigate = useNavigate();

    const saveData = async (data) => {
        // setState({ ...state, customerDetails: data });
        //   navigate("/confirm");
        let date = new Date();
        let month = date.getMonth()+1;
        let currentDate= date.getFullYear()+"-"+(month < 10 ? "0"+month:month)+"-"+date.getDate();
        data = {...data, fromAccount: parseInt(data.fromAccount), toAccount: parseInt(data.toAccount), 
            amount: parseInt(data.amount), date: currentDate, status: "completed"};
        console.log(data);
        console.log(JSON.stringify(data));
        try {
        const token = localStorage.getItem('token');
        const header = {
            
        Authorization: `Bearer ${token}`
        };
        const loggedInID = localStorage.getItem('id');
        const res = await axios.post(`http://localhost:8080/transactions/`,data, {headers: header});

        console.log(res);
        setSuccess(true);
        } catch(error) {
            setHasError(true);
      setError(error.response.data);
      console.log(error.response.data);
        }

    };

    return (
        < div className="container d-flex align-items-center flex-column" style={{ color: "white" }}>
            <Navbar />
            <CssVarsProvider>
                <Sheet sx={{
                    width: 600,
                    mx: 'auto', // margin left & right
                    my: 4, // margin top & bottom
                    py: 3, // padding top & bottom
                    px: 2, // padding left & right
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    borderRadius: 'sm',
                    boxShadow: 'md',
                }}
                    variant="outlined">


                    <h3> Transfer Funds </h3>
                    <Form onSubmit={handleSubmit(saveData)}>
                        <Row>
                            <Col>
                                <Field label="FROM " error={errors?.fromAccount}>
                                    <Input
                                        {...register("fromAccount", { required: "Valid account no is required"
                                    ,min:{value:0 , message:"Account no cannot be negative"}
                                    })}
                                        id="fromAccount"
                                        type="number"
                                    />
                                </Field>
                            </Col>
                            <Col>
                                <Field label="TO" error={errors?.toAccount}>
                                    <Input
                                        {...register("toAccount", { required: "Valid account no is required" 
                                        ,min:{value:0 , message:"Account no cannot be negative"}})}
                                        id="toAccount"
                                        type="number"
                                    />
                                </Field>
                            </Col>
                        </Row>

                        <div class="row mb-3">
                            <Field label="amount"  error={errors?.amount}>
                                <Input
                                    {...register("amount", {
                                        required: "Amount is required",
                                        min:{ value:0, message:"Enter only positive numbers"},
                                        
                                    })}
                                    id="amount"
                                    type="number"
                                />
                            </Field>
                        </div>

                        <div class="row mb-3">
                        <Field label="remark"  error={errors?.Remark}>
                                <Input
                                    {...register("remark", {
                                        required: "Remark is required",
                                        
                                        
                                    })}
                                    id="remark"
                                    type="text"
                                />
                            </Field>
                        </div>
                        <fieldset class="row mb-3">
                            <legend class="col-form-label  pt-0">Type of Transaction </legend>
                            <div  align="center" >
                            <Field label="NEFT"  error={errors?.type}>
                                <input
                                    {...register("type")}
                                    id="type"
                                    type="radio"
                                    value="NEFT"
                                    
                                />
                            </Field>
                            <Field label="IMPS"  error={errors?.type}>
                                <input
                                    {...register("type")}
                                    id="type"
                                    type="radio"
                                    value="IMPS"
                                />
                            </Field><Field label="RTGS"  error={errors?.type}>
                                <input
                                    {...register("type")}
                                    id="type"
                                    type="radio"
                                    value="RTGS"
                                />
                            </Field>
                            </div>
                        </fieldset>

                        <Button>Send {">"}</Button>


                    </Form>

                    {/* <Link to="/login/welcome"><p style={{ color: "white" }}>Go to dashboard</p></Link> */}
                    {success && <p><b>Transaction is Successfull </b></p>}
                    {hasError && <div>
        <p style={{textAlign: 'center'}}> <strong>{error.property}</strong>: {error.code}. <br></br>
        <strong>Description: </strong>{error.message}</p>
        </div>}
                </Sheet>
            </CssVarsProvider>
        </div>
    )
}
export default AccountTransactions;
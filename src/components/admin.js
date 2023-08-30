import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import axios from 'axios';
import { Table } from 'react-bootstrap';
import { Sheet } from '@mui/joy';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import { Link } from "react-router-dom";

const Admin = () => {
    const [alluser, setAlluser] = useState([]);
    const [filteredUser, setFilteredUser] = useState(alluser);
    const [searchName, setSearchName] = useState("");
    const token = localStorage.getItem('token');
    const header = {
        Authorization: `Bearer ${token}`
    };

    const getData = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/customer-details`, { headers: header });
            console.log(response.data);
            setAlluser(response.data);
            setFilteredUser(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        console.log("This is running")
        getData();
    }, []);

    const postdata = async (key) => {
        console.log(key)
        console.log("runningggg")
        const res = await axios.post(`http://localhost:8080/approve-customer/${key}`, {}, { headers: header });
        console.log(res.data);
        getData();
    }

    const deletedata = async (key) => {
        try {
            const res = await axios.post(`http://localhost:8080/deny-customer/${key}`, {}, { headers: header });
            console.log(res.data);
            getData();
        } catch (error) {
            console.log(error);
        }
    }

    const filterUsersByName = (name) => {
        // if(name == '') setFilteredUser(alluser);
        // console.log(name)
        const filtered = alluser.filter((user) =>
            user.firstName.toLowerCase().includes(name.toLowerCase()) ||
            user.lastName.toLowerCase().includes(name.toLowerCase())
        );
        setFilteredUser(filtered);
    }

    const handleSearch = (event) => {
        const { value } = event.target;
        setSearchName(value);
        filterUsersByName(value);
    }

    const doLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("id");
    }

    return (
        <>
            <b style={{ color: "white" }}> Logged in as Admin.</b>
 
        <button><Link to="/" onClick={doLogout}>Log out</Link></button>

            <div>
                <input
                    type="text"
                    placeholder="Search by Name"
                    value={searchName}
                    onChange={handleSearch}
                />
            </div>

            <Sheet
                sx={{
                    width: 1500,
                    mx: 'auto',
                    my: 4,
                    py: 3,
                    px: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    borderRadius: 'sm',
                    boxShadow: 'md',
                }}
                variant="outlined"
            >
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>User Id</th>
                            <th> Name</th>
                            <th> Date Of Birth</th>
                            <th>Mobile Number</th>
                            <th>Aadhar No</th>
                            <th> Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        {filteredUser.map((val, key) => {
                            return (
                                <tr key={key}>
                                    <td>{val.id}</td>
                                    <td>{val.firstName} {val.lastName}</td>
                                    <td>{val.dob}</td>
                                    <td>{val.mobileNumber}</td>
                                    <td>{val.aadhar}</td>
                                    {!val.customer.verifiedUser && <td>
                                        <Button onClick={() => postdata(val.id)} color="success">Approve</Button>
                                        <Button onClick={() => deletedata(val.id)}>Reject</Button>
                                    </td>}
                                    {val.customer.verifiedUser && <td>Approved</td>}
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </Sheet>
        </>
    )
}

export default Admin;

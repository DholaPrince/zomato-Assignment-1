import React, { useState } from 'react'
import Header from '../../Header'

const url = "http://localhost:5500/placeOrder"

export const PlaceOrder = (props) => {
    console.log(props)

    let sessionData = sessionStorage.getItem("userInfo")
    console.log(sessionData)
    let data = JSON.parse(sessionData)
    console.log(data)

    const initialValue = {
        id: Math.floor(Math.random() * 100000),
        rest_Name: props.match.params.restName,
        name: data.name,
        email: data.email,
        phone: data.phone,
        address: "plot 35, delhi",
        cost: sessionStorage.getItem("totalPrice")
    }

    const [values, setValues] = useState(initialValue)
    //const [state, setState] = useState(initialValue)

    const handleInputChange = (e) => {

        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }


    const checkout = () => {
        fetch(url, {
            method: "POST",
            body: JSON.stringify(values),
            headers: {
                accept: "application/json",
                "Content-Type": "application/json"
            }
        })
            .then((props.history.push("/viewBooking")))
    }
    return (
        <>
            <Header />
            <div className="container">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3>Order for {props.match.params.restName}</h3>
                    </div>
                    <div className="panel-body">
                        <div className="row">
                            <div className="col-md-6 form-group">
                                <label for="fname" className="control-label">Name</label>
                                <input className="form-control" id="fname"
                                    name="name" value={values.name} onChange={handleInputChange} />
                            </div>
                            <div className="col-md-6 form-group">
                                <label for="email" className="control-label">Email</label>
                                <input className="form-control" id="email"
                                    name="email" value={values.email} onChange={handleInputChange} />
                            </div>
                            <div className="col-md-6 form-group">
                                <label for="email" className="control-label">Phone</label>
                                <input className="form-control" id="phone"
                                    name="phone" value={values.phone} onChange={handleInputChange} />
                            </div>
                            <div className="col-md-6 form-group">
                                <label for="address" className="control-label">Address</label>
                                <input className="form-control" id="address"
                                    name="address" value={values.address} onChange={handleInputChange} />
                            </div>

                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <h2>Total Price is Rs. {values.cost}</h2>
                            </div>
                        </div>
                        <button className='btn btn-success' onClick={checkout} >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
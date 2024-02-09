import axios from 'axios'
import React, { useState } from 'react'
import NavBar from './NavBar'

const AddBook = () => {
    const [input, setInput] = new useState(
        {
            "bookName": "",
            "author": "",
            "price": "",
            "publisher": ""
        }
    )
    const inputHandler = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value })
    }
    const readValues = () => {
        console.log(input)
        axios.post("http://localhost:3001/api/book/book-add", input).then(
            (response) => {
                console.log(response.data)
                if (response.data.status == "success") {
                    alert("Sucessfully added")
                    setInput(
                        {

                            "bookName": "",
                            "author": "",
                            "price": "",
                            "publisher": ""
                        }
                    )
                } else {
                    alert("Something went wrong")
                }
            }
        )
    }
    return (
        <div>
            <NavBar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Book name</label>
                            <input type="text" className="form-control" name='bookName' value={input.bookName} onChange={inputHandler}/>
                        </div>
                        <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Author</label>
                            <input type="text" className="form-control" name='author' value={input.author} onChange={inputHandler} />
                        </div>
                        <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Price</label>
                            <input type="text" className="form-control" name='price' value={input.price} onChange={inputHandler}/>
                        </div>
                        <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Publisher</label>
                            <input type="text" className="form-control" name='publisher' value={input.publisher} onChange={inputHandler}/>
                        </div>
                        <div className="col-col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success" onClick={readValues}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </div>
    )
}

export default AddBook
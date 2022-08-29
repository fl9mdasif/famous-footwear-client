import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query'

const ManageProduct = () => {
    // const navigate = useNavigate()
    const [products, setProducts] = useState([]);



    const { isLoading, error, data: product, refetch } = useQuery(['shoeData'], () =>
        fetch(`http://localhost:5000/allshoes`).then(res =>
            res.json())
    )
    if (isLoading) return 'Loading...'
    if (error) return 'An error has occurred: ' + error.message
    // console.log(products)
    const { name, brand, description, available, gender, originalPrice, discountPrice, imgUrl, discountRoundPrice } = product


    // Delete Single Shoe
    const manageProductToDelete = (id) => {
        const proceed = window.confirm('Are you sure to delete product');
        if (proceed) {
            const url = `http://localhost:5000/allshoes/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    toast.error('product deleted from All shoes')
                    refetch()

                })
        }
    };
    return (
        <div className="overflow-x-auto">
            <div className="py-10 font-bold text-center text-primary sm:text-2xl md:text-4xl lg:text-5xl">MANAGE PRODUCT</div>

            <table className="table table-compact w-full mx-auto text-center">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Brand</th>
                        <th>Quantity</th>
                        <th>Gender</th>
                        <th>Price</th>
                        <th>Manage</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        product.map((product, index) =>
                            <tr>
                                <td>{index + 1}</td>
                                <td>{product.name}</td>
                                <td>{product.brand}</td>
                                <td>{product.available}</td>
                                <td>{product.gender}</td>
                                <td>{product.discountPrice}</td>
                                <td><button onClick={() => manageProductToDelete(product._id)} className='btn border-none text-white btn-xs bg-white'><box-icon color='red' type='solid' name='trash'></box-icon></button></td>
                            </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageProduct;
import React from 'react';
import Header from '../../components/Partials/Header';
import Sidebar from '../../components/Partials/Sidebar';



const UserCustOrder = () => {
    return (
        <>
            <Sidebar />
              <div className="main-products-content">
                    <Header />

                    <main>
                        <h2 className="dash-title">All Customer Order</h2>
                        <section className="recent-orders">
                            <div className="orders-card">
                                <h3>Recently Customer Order List</h3>

                                <div className="table-responsive">
                                            <table>
                                                <thead>
                                                        <tr>
                                                            <th>Image</th>
                                                            <th>Products Name</th>
                                                            <th>Description</th>
                                                            <th>Price</th>
                                                            <th>Stock Qty</th>
                                                            <th>Unit</th>
                                                            <th>Actions</th>
                                                        </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="td-team">
                                                            <div className="img-1"></div>
                                                        </td>
                                                        <td>Apple</td>
                                                        <td>the american fruit</td>
                                                        <td>$13.24</td>
                                                        <td>23</td>
                                                        <td>package</td>
                                                        <td>
                                                            <span className="badge success">Delete</span>
                                                            <span className="badge success">Edit</span>
                                                        </td>
                                                    </tr>             

                                                    <tr>
                                                        <td className="td-team">
                                                            <div className="img-1"></div>
                                                        </td>
                                                        <td>Apple</td>
                                                        <td>the american fruit</td>
                                                        <td>$13.24</td>
                                                        <td>23</td>
                                                        <td>package</td>
                                                        <td>
                                                            <span className="badge success">Delete</span>
                                                            <span className="badge success">Edit</span>
                                                        </td>
                                                    </tr>             

                                                    <tr>
                                                        <td className="td-team">
                                                            <div className="img-1"></div>
                                                        </td>
                                                        <td>Apple</td>
                                                        <td>the american fruit</td>
                                                        <td>$13.24</td>
                                                        <td>23</td>
                                                        <td>package</td>
                                                        <td>
                                                            <span className="badge success">Delete</span>
                                                            <span className="badge success">Edit</span>
                                                        </td>
                                                    </tr>             

                                                    <tr>
                                                        <td className="td-team">
                                                            <div className="img-1"></div>
                                                        </td>
                                                        <td>Apple</td>
                                                        <td>the american fruit</td>
                                                        <td>$13.24</td>
                                                        <td>23</td>
                                                        <td>package</td>
                                                        <td>
                                                            <span className="badge success">Delete</span>
                                                            <span className="badge success">Edit</span>
                                                        </td>
                                                    </tr>                                                   

                                                    <tr>
                                                        <td className="td-team">
                                                            <div className="img-1"></div>
                                                        </td>
                                                        <td>Apple</td>
                                                        <td>the american fruit</td>
                                                        <td>$13.24</td>
                                                        <td>23</td>
                                                        <td>package</td>
                                                        <td>
                                                            <span className="badge success">Delete</span>
                                                            <span className="badge success">Edit</span>
                                                        </td>
                                                    </tr>             

                                                    <tr>
                                                        <td className="td-team">
                                                            <div className="img-1"></div>
                                                        </td>
                                                        <td>Apple</td>
                                                        <td>the american fruit</td>
                                                        <td>$13.24</td>
                                                        <td>23</td>
                                                        <td>package</td>
                                                        <td>
                                                            <span className="badge success">Delete</span>
                                                            <span className="badge success">Edit</span>
                                                        </td>
                                                    </tr>             

                                                    <tr>
                                                        <td className="td-team">
                                                            <div className="img-1"></div>
                                                        </td>
                                                        <td>Apple</td>
                                                        <td>the american fruit</td>
                                                        <td>$13.24</td>
                                                        <td>23</td>
                                                        <td>package</td>
                                                        <td>
                                                            <span className="badge success">Delete</span>
                                                            <span className="badge success">Edit</span>
                                                        </td>
                                                    </tr>             

                                                    <tr>
                                                        <td className="td-team">
                                                            <div className="img-1"></div>
                                                        </td>
                                                        <td>Apple</td>
                                                        <td>the american fruit</td>
                                                        <td>$13.24</td>
                                                        <td>23</td>
                                                        <td>package</td>
                                                        <td>
                                                            <span className="badge success">Delete</span>
                                                            <span className="badge success">Edit</span>
                                                        </td>
                                                    </tr>             
                                                </tbody>
                                            </table>
                                        </div>
                            </div>
                        </section>
                    </main>
              </div>
        </>
    )
}

export default UserCustOrder;

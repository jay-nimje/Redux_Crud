import React, { useEffect } from 'react'

import { useSelector,useDispatch } from 'react-redux'
import { deletedata } from '../../userReducer'
import {fetchcontact} from '../../contactReducer'

function Manage_contact() {

    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(fetchcontact());
    },[]);

    const {allcontact}=useSelector((state)=>state.contactReducer);
    const deletehandel=(id)=>{
        dispatch(deletedata(`http://localhost:3000/contact/${id}`));
        dispatch(fetchcontact());
        
    }

    return (
        <div>
            <div className="container mt-5">
                <div className="row">

                    <div className="col-md-8 offset-md-2">
                        <div className="row mt">
                            <div className="col-md-12">
                                <div className="content-panel">
                                    <h4><i className="fa fa-angle-right" /> Manage User</h4><hr /><table className="table table-striped table-advance table-hover">
                                        <thead>
                                            <tr>
                                                <th>id</th>
                                                <th> Name</th>
                                                <th> Email</th>
                                                <th> Message</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                          {
                                            allcontact.map((value)=>{
                                                return(
                                                    <tr>
                                                        <th>{value.id}</th>
                                                        <th>{value.name}</th>
                                                        <th>{value.email}</th>
                                                        <th>{value.message}</th>
                                                        <th>
                                                            <button className='btn btn-danger' onClick={()=>deletehandel(value.id)}>Delete</button>
                                                            <button className='btn btn-primary'>Edit</button>
                                                        </th>
                                                    </tr>
                                                )
                                            })
                                          }
                                        </tbody>
                                    </table>
                                </div>{/* /content-panel */}
                            </div>{/* /col-md-12 */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Manage_contact
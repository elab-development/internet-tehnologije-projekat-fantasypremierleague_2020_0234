import DataTable from 'datatables.net-react';
import DT from 'datatables.net-bs5';
import 'datatables.net-select-dt';
import 'datatables.net-responsive-dt';
import SimpleModal from "../components/Modal.jsx";
import {useRef, useState} from "react";

DataTable.use(DT);

function Admin() {
    const table = useRef();
    const token = localStorage.getItem('authToken');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [id, setId] = useState(false);

    const ajax  = {
        url: 'http://127.0.0.1:8000/api/dashboard/users',
            type: 'GET',
            beforeSend: function (request) {
            request.setRequestHeader('Authorization', `Bearer ${token}`);
        },
    }

    const columns = [
        { data: 'name' },
        { data: 'email' },
        { data: 'role_name' },
    ];

    const toggleModal = function (e) {
        setId(e.target.getAttribute('data-id'))
        setIsModalOpen(!isModalOpen)
        table.current.dt().ajax.reload(null, false);
    }

    return (
        <div>
            <DataTable ref={table} ajax={ajax} columns={columns} className="display"
                       slots={{
                           3: (data, row) => (
                               <button className="mt-[10px] button" data-id={row.id} onClick={toggleModal}>
                                   Change
                               </button>
                           )
                       }}
            >
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Change Role</th>
                </tr>
                </thead>
            </DataTable>
            <SimpleModal isOpen={isModalOpen} toggleModal={toggleModal} id={id}/>
        </div>
    );
}

export default Admin;

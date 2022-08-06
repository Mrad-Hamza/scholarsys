import React from 'react';
import {Link} from 'react-router-dom'
// Import Components
import { Row, Col, Card, Media } from "react-bootstrap";
//Import Data Table
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faPencilAlt, faPlus, faTrash } from '@fortawesome/fontawesome-free-solid';

const data = [
    { 
        id: 'formation1',
        name: 'Data Science',
        mtAnn: '7700',
        dureeAnn: '1995',
        dureeMens: '180',
        dateEcheance:'20/20/2020',
        action: ''
    },
    {
        id: 'formation2',
        name: 'Data Science',
        mtAnn: '7700',
        dureeAnn: '1995',
        dureeMens: '180',
        dateEcheance:'20/20/2020',
        action: ''
    },
    {
        id: 'formation3',
        name: 'Data Science',
        mtAnn: '7700',
        dureeAnn: '1995',
        dureeMens: '180',
        dateEcheance:'20/20/2020',
        action: ''
    },
    {
        id: 'formation4',
        name: 'Data Science',
        mtAnn: '7700',
        dureeAnn: '1995',
        dureeMens: '180',
        dateEcheance:'20/20/2020',
        action: ''
    },
    {
        id: 'formation5',
        name: 'Data Science',
        mtAnn: '7700',
        dureeAnn: '1995',
        dureeMens: '180',
        dateEcheance:'20/20/2020',
        action: ''
    },
    {
        id: 'formation6',
        name: 'Data Science',
        mtAnn: '7700',
        dureeAnn: '1995',
        dureeMens: '180',
        dateEcheance:'20/20/2020',
        action: ''
    },
];

const columns = [
    {
        name: 'Name',
        sortable: true,
        selector: row=>row.name
    },
    {
        name: 'Montant annuelle',
        selector: row=>row.mtAnn,
        sortable: true,
    },
    {
        name: 'Duree Annuelle',
        selector: row=>row.dureeAnn,
        sortable: true,
    },
    {
        name: 'Duree Mensuelle',
        selector: row=>row.dureeMens,
        sortable: true,
    },
    {
        name: "Date d'écheances",
        selector: row=>row.dateEcheance,
        sortable: true,
    },
    {
        name: 'Action',
        selector: row=>row.action,
        sortable: true,
        cell: (formation) => <div><Link to={{pathname: `/edit-formation/${formation.id}`, state:{formation} }} 
         className="btn btn-sm bg-success-light me-2">
        <FontAwesomeIcon icon={faPencilAlt} />
        </Link>
        <a href="#" className="btn btn-sm bg-danger-light "> <FontAwesomeIcon icon={faTrash} /> </a></div>
    },
];


function FormationsList (){       
        const tableData = {
            columns,
            data,
        };

        return (
            <div>
                <div className="page-header">
                    <div className="page-header">
                        <Row>
                            <Col className="col">
                                <h3 className="page-title">Formations</h3>
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="/dashboard">Dashboard</a></li>
                                    <li className="breadcrumb-item active">Formations</li>
                                </ul>
                            </Col>
                            <Col className="col-auto text-end float-end ms-auto">
                                <a href="#" className="btn btn-outline-primary me-2"><FontAwesomeIcon icon={faDownload} /> Download</a>
                                <a href="/add-department" className="btn btn-primary"><FontAwesomeIcon icon={faPlus} /></a>
                            </Col>
                        </Row>
                    </div>
                </div>

                <Card>
                    <DataTableExtensions
                        {...tableData}
                    >
                        <DataTable
                            noHeader
                            defaultSortField="id"
                            defaultSortAsc={false}
                            pagination
                            highlightOnHover
                        />
                    </DataTableExtensions>
                </Card>
            </div>
        )
}
export { FormationsList };
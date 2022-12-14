import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import * as yup from 'yup';
import { Formik, useFormik, Form } from 'formik';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';

function Fruit(props) {

    const [open, setOpen] = React.useState(false);

    const [dopen, setDOpen] = React.useState(false);

    const [update, setUpdate] = useState(false);

    const [did, setDid] = useState(0);

    const [data, setData] = useState([]);

    const [filterData, setFilterData] = useState([]);


    const handleDClickOpen = () => {
        setDOpen(true);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setDOpen(false);
        setUpdate(false)
    };

    const handleEdit = (params) => {
        handleClickOpen()

        setUpdate(true)

        formikobj.setValues(params.row)
    }

    let schema = yup.object().shape({
        name: yup.string().required("Enter your name"),
        price: yup.number().required("enter your price").positive().integer(),
        equtity: yup.string().required("Enter your equtity")
    });

    const innerdata = (values) => {

        let LocalData = JSON.parse(localStorage.getItem("Fruit"));

        let id = Math.floor(Math.random() * 1000);

        console.log(LocalData, id);

        let data = {
            id: id,
            ...values
        }
        console.log(data);

        if (LocalData === null) {
            localStorage.setItem("Fruit", JSON.stringify([data]));
        } else {
            LocalData.push(data);
            localStorage.setItem("Fruit", JSON.stringify(LocalData));
        }


        LoadData();
        formikobj.resetForm();
        handleClose()

    }

    const handleUpadatedata = (values) => {
        let LocalData = JSON.parse(localStorage.getItem("Fruit"));

        let uData = LocalData.map((d) => {
            if (d.id === values.id) {
                return values;
            } else {
                return d;
            }
        })
        localStorage.getItem("Fruit", JSON.stringify(uData));

    }

    const formikobj = useFormik({
        initialValues: {
            name: '',
            price: '',
            equtity: '',
        },
        validationSchema: schema,
        onSubmit: values => {
            console.log(values);
            {
                if (update) {
                    handleUpadatedata(values);
                } else {
                    innerdata(values);
                }
            }
        },
    });

    const handleDelete = () => {
        console.log(data);
        let LocalData = JSON.parse(localStorage.getItem("Fruit"));
        let fData = LocalData.filter((l) => l.id !== did);
        localStorage.setItem("Fruit", JSON.stringify(fData))
        LoadData();
        handleClose();
    }

    const columns = [
        { field: 'name', headerName: 'Name', width: 170 },
        { field: 'price', headerName: 'Price', width: 170 },
        { field: 'equtity', headerName: 'Equtity', width: 170 },
        {
            field: 'action',
            headerName: 'Action',
            width: 170,
            renderCell: (params) => (
                <>
                    <IconButton aria-label="delete" onClick={() => handleEdit(params)}>
                        <EditIcon
                        />
                    </IconButton>

                    <IconButton aria-label="delete" onClick={() => { handleDClickOpen(); setDid(params.id) }}>
                        <DeleteIcon
                        />
                    </IconButton>
                </>
            )
        },
    ];

    useEffect(() => {

        LoadData();

    }, []);

    const LoadData = () => {
        let LocalData = JSON.parse(localStorage.getItem("Fruit"))

        if (LocalData !== null) {
            setData(LocalData)
        }
    }

    const handleSearch = (val) => {

        let localData = JSON.parse(localStorage.getItem("Fruit"));

        let fData = localData.filter((d) => (
            d.name.toLowerCase().includes(val.toLowerCase()) ||
            d.price.toString().includes(val) ||
            d.equtity.toString().includes(val)
        ));

        setFilterData(fData);
    }

    let finalData = filterData.length > 0 ? filterData : data

    const { handleChange, handleSubmit, handleBlur, errors, touched, values } = formikobj;


    return (
        <div>
            <h1>Fruits Details</h1>
            <Button variant="outlined" onClick={handleClickOpen}>
                Fruits Details
            </Button>
            <TextField
                margin="dense"
                name="search"
                label="Fruits search"
                type="search"
                fullWidth
                variant="standard"
                onChange={(e) => handleSearch(e.target.value)}
            />
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={finalData}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />
            </div>
            <Dialog
                open={dopen}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Are you sure delete?"}
                </DialogTitle>
                <DialogActions>
                    <Button onClick={handleClose}>No</Button>
                    <Button onClick={handleDelete} autoFocus>
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>
            <Dialog open={open} onClose={handleClose} fullWidth>
                <DialogTitle>Fruits Details</DialogTitle>

                <Formik values={formikobj}>
                    <Form onSubmit={handleSubmit}>
                        <DialogContent>
                            <TextField
                                value={values.name}
                                margin="dense"
                                name="name"
                                label="Fruits Name"
                                type="text"
                                fullWidth
                                variant="standard"
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.name && touched.name ? <p>errors.name</p> : ''}
                            <TextField
                                margin="dense"
                                value={values.price}
                                name="price"
                                label="Fruits price"
                                type="text"
                                fullWidth
                                variant="standard"
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.price && touched.price ? <p>errors.price</p> : ''}
                            <TextField
                                value={values.equtity}
                                margin="dense"
                                name="equtity"
                                label="Fruit equtity"
                                type="text"
                                fullWidth
                                variant="standard"
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.equtity && touched.equtity ? <p>errors.equtity</p> : ''}

                            <DialogActions>
                                <Button onClick={handleClose}>Cancel</Button>
                                {
                                    update ?
                                        <Button type="submit">update</Button>
                                        :
                                        <Button type="submit">Submit</Button>
                                }

                            </DialogActions>
                        </DialogContent>

                    </Form>
                </Formik>

            </Dialog>
        </div>
    );
}

export default Fruit;
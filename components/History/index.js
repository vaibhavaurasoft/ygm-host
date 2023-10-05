import React, { useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHistory } from '../../redux/slices/historySlice';
import { Stack } from '@mui/material';

export default function DataTable() {
    const history = useSelector((state) => state.history.data);
    const dispatch = useDispatch();
    const userDetails = useSelector((state) => state.user.userDetails);
    useEffect(() => {
        if (userDetails) {
            dispatch(fetchHistory(userDetails.token));
        }
    }, []);
    const columns = [
        {
            field: 'id', headerName: 'S. No.', width: 150, filterable: false,
            renderCell: (index) => index.api.getRowIndex(index.row.id) + 1
        },
        { field: 'institute_name', headerName: 'Institute Name', width: 400 },
        { field: 'course_name', headerName: 'Course Name', width: 480 },
    ];
    const NoRowsOverlay = () => {
        return (
            <Stack height="100%" alignItems="center" justifyContent="center">
                No history available.
            </Stack>
        );
    }
    return (

        <div className='historyTable'>
            <Box sx={{ height: 300, width: '100%' }}>
                <DataGrid
                    rows={history}
                    columns={columns}
                    hideFooterPagination={true}
                    components={{ NoRowsOverlay }}
                    getRowId={(row) => row.id}
                />
            </Box>
        </div>
    );
}

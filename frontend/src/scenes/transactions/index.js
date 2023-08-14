import React, {useState} from 'react';
import Header from 'components/Header';
import { Box, useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

import { useGetTransactionsQuery } from 'state/api'
import { json } from 'react-router-dom';

const columns = [
  { field: '_id',
   headerName: 'ID', 
   flex: 1 },
  {
    field: 'userId',
    headerName: 'User ID',
   flex: 1  
  },
  {
    field: 'createdAt',
    headerName: 'CreatedAt',
    flex: 1
  },

  {
    field: 'products',
    headerName: '# of Products',
    flex: 0.5,
    sortable: false,
    renderCell: (params)=> params.value.length
  },
  {
      field: 'cost',
      headerName: 'Cost',
      flex: 1,
      renderCell: (params)=> `KES ${Number(params.value).toFixed(2)}`
    }
];
function Transactions() {

  const theme = useTheme();

  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(20);
  const [sort, setSort] = useState({});
  const [search, setSearch] = useState("");

  const {data, isLoading} = useGetTransactionsQuery(page, pageSize, JSON.stringify(sort), search);


  return (
    <Box m="1.5rem 2.5rem">
        <Header title="Transactions" />
        
      
    </Box>
   
  )
}

export default Transactions
import React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { styles } from './styles'

const TableCompany = ({ titles, data }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={styles.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            {titles.map((item, index) => {
              // использую индекс, т.к. данные не меняются динамично
              return (
                <TableCell key={index} align="center">
                  {item}
                </TableCell>
              )
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id} sx={styles.tableRow}>
              {Object.values(row).map((value, index) => {
                if (index > 0) {
                  return (
                    <TableCell key={index} align="center">
                      {value}
                    </TableCell>
                  )
                }
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableCompany

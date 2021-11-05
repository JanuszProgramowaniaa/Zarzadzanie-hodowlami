import React,{useMemo} from 'react'
import{useTable,useGlobalFilter} from 'react-table'
import './Desc.scss'
import { useState } from 'react'
import { GlobalFilter } from './GlobalFilter'

const DATA =[
  {
    id:22,
    Father:"Damian",
    Date:"1998-01-01"
  },
  {
    id:2,
    Mother:"Vasquez",
    Date:"2012-01-01"
  }
  
  ]
  const COLUMNS=[
    {
    Header:'Identyfikator',
    Footer:'Identyfikator',
    accessor: 'id'
  
  },
  {
    Header:'Matka',
    Footer:'Matka',
    accessor: 'Mother'
  
  },
  {
    Header:'Ojciec',
    Footer:'Ojciec',
    accessor: 'Father'
  
  },
  
  {
    Header:'Wiek',
    Footer:'Wiek',
    accessor: 'Age'
  },
  {
    Header:'Data Urodzenia',
    Footer:'Data Urodzenia',
    accessor: 'Date'
  },

 {
    Header:'Zdjęcie',
    Footer:'Zdjęcie',
    accessor: 'Photo'
  } ,
  
  ]


const Desc=(props) =>{
    const ContainerStyle={display:"flex" ,width:"100%" , flexDirection: "row" ,alignItems: "flex-start", justifyContent: "center" ,flexWrap:"wrap"}

    const [Footer, setFooter] = useState(false);

const columns = useMemo(()=>COLUMNS , [])
const data = useMemo(()=>DATA , [])


const tableInstance =useTable({
  columns:columns,
  data:data
},useGlobalFilter)

const {getTableProps,getTableBodyProps,headerGroups,rows,prepareRow,footerGroups,state,setGlobalFilter} = tableInstance
const {globalFilter}=state
    return(
      

<div  style={ContainerStyle} id="Desc-Container">
    
 
<GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />


<table {...getTableProps()}>
  <thead> 
  {headerGroups.map((headerGroup)=>(
<tr {...headerGroup.getHeaderGroupProps()}>
{
  headerGroup.headers.map((column) =>(
  <th {...column.getHeaderProps()}>{column.render("Header")}</th>
  ))}
</tr>

  ))}
<tr>
  
</tr>
  </thead>
  <tbody {...getTableBodyProps()}>
  {rows.map((row) =>{
      prepareRow(row)
      return(
        <tr {...row.getRowProps()}>
      {
        row.cells.map((cell)=>{
          return <td{...cell.getCellProps()}> {cell.render('Cell')} </td>
        

    })}
   
 </tr>
)
})}
  </tbody>

  { Footer ?  <tfoot>
    {
      footerGroups.map(footerGroup=>(
        <tr {...footerGroup.getFooterGroupProps()}>
                {
                  footerGroup.headers.map(column=>(
                    <td {...column.getFooterProps}>
                      {
                        column.render('Footer')
                      }
                    </td>
                  ))
                }

        </tr>
      ))
    }
  </tfoot> : null    }
 




</table>

  </div>
    
        
    )
}

export default Desc
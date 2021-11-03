import './App.css'
import SearchBar from './Components/SearchBar'
import TableList from './Components/TableList'
import React, { useState, useEffect } from 'react'
import Axios from 'axios'

function App() {
  const [stockNo, setStockNo] = useState([])
  const [dataList, setDataList] = useState([])

  useEffect(() => {
    const getStockNo = () => {
      Axios.get('http://localhost:3001/stock').then((res) => {
        setStockNo(res.data)
        console.log('stockNO', stockNo)
      })
    }

    getStockNo()
  }, [])
  return (
    <>
      <div className="App">
        <h1 className="d-flex justify-content-center title">
          在下方搜尋列搜尋股票代碼
        </h1>
        <SearchBar stockNo={stockNo} setDataList={setDataList} />
        <TableList dataList={dataList} />
      </div>
    </>
  )
}

export default App

import '../style/SearchBar.css'
import React, { useState } from 'react'
import SearchIcon from '@material-ui/icons/Search'
import Axios from 'axios'

function SearchBar(props) {
  const { stockNo, setDataList } = props

  // 顯示選單
  const [searchData, setSearchData] = useState([])

  // 儲存 input value
  const [enterWord, setEnterWord] = useState('')

  // 當 input 輸入值發生改變的時候，執行這段程式碼
  const handleFilter = () => {
    const newFilter = stockNo.filter((value) => {
      return value.stock_id.includes(enterWord)
    })

    if (enterWord === '') {
      setSearchData([])
    } else {
      setSearchData(newFilter)
    }
  }

  const getStockList = (value) => {
    Axios.get(`http://localhost:3001/stock/${value}`).then((res) => {
      setDataList(res.data)
    })
  }

  return (
    <>
      <div className="search-bar d-flex justify-content-center flex-column align-items-center">
        <div className="search-input d-flex">
          <input
            type="text"
            placeholder="請填入股票代號"
            value={enterWord}
            onChange={(e) => {
              setEnterWord(e.target.value)
              handleFilter()
            }}
          />
          <div className="searchIcon">
            <SearchIcon />
          </div>
        </div>
        {searchData.length !== 0 && (
          <div className="search-result">
            {searchData.map((value, index) => {
              return (
                <div
                  key={index}
                  className="dataItem"
                  onClick={(e) => {
                    setEnterWord(value.stock_id)
                    setSearchData('')
                    getStockList(value.stock_id)
                  }}
                >
                  {value.stock_id} ： {value.stock_name}
                </div>
              )
            })}
          </div>
        )}
      </div>
    </>
  )
}

export default SearchBar

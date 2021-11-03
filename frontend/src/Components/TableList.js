import '../style/TableList.css'
import React from 'react'

function TableList(props) {
  const { dataList } = props

  return (
    <>
      <div className="d-flex justify-content-center">
        <table class="styled-table">
          <thead>
            <tr>
              <th>代號</th>
              <th>日期</th>
              <th>開盤價</th>
              <th>最高價</th>
              <th>最低價</th>
              <th>收盤價</th>
              <th>漲跌價差</th>
              <th>成交筆數</th>
              <th>成交金額</th>
              <th>成交股數</th>
            </tr>
          </thead>

          {dataList.map((value, index) => {
            return (
              <tbody key={index}>
                <tr>
                  <td>{value.stock_id}</td>
                  <td>{value.date}</td>
                  <td>{value.open_price}</td>
                  <td>{value.high_price}</td>
                  <td>{value.low_price}</td>
                  <td>{value.close_price}</td>
                  <td>{value.delta_price}</td>
                  <td>{value.transactions}</td>
                  <td>{value.volume}</td>
                  <td>{value.amount}</td>
                </tr>
              </tbody>
            )
          })}
        </table>
      </div>
    </>
  )
}

export default TableList

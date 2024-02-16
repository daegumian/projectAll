// Order.js

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../CSS/Order.css"; // Order.css 파일을 가져옵니다.

const Order = () => {
  // 주문 정보 상태 변수들
  const [symbol, setSymbol] = useState("BTC");
  const [price, setPrice] = useState("");
  const [orderType, setOrderType] = useState("Long");
  const [orders, setOrders] = useState([]);

  // 주문 생성 함수
  const createOrder = () => {
    addOrderToBoard(symbol, price, orderType);
  };

  // 주문을 보드에 추가하는 함수
  const addOrderToBoard = (symbol, price, orderType) => {
    const newOrder = {
      symbol,
      price,
      orderType,
    };

    setOrders([...orders, newOrder]);
  };

  // 주문 삭제 함수
  const deleteOrder = (index) => {
    const updatedOrders = [...orders];
    updatedOrders.splice(index, 1);
    setOrders(updatedOrders);
  };

  return (
    <div className='centered-container'>
      <h1>arcticflower</h1>
      <h4>Power of Compound Interest</h4>

      {/* 주문 입력 테이블 */}
      <table className='orders-table'>
        <tbody>
          <tr>
            <td>
              <label htmlFor='symbol'>티커</label>
            </td>
            <td>
              <select
                id='symbol'
                value={symbol}
                onChange={(e) => setSymbol(e.target.value)}
              >
                <option value='BTC'>BTC</option>
                <option value='ETH'>ETH</option>
                <option value='SOL'>SOL</option>
                <option value='XRP'>XRP</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor='price'>지정가</label>
            </td>
            <td>
              <input
                type='text'
                id='price'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder='가격 입력'
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor='orderType'>주문 방향</label>
            </td>
            <td>
              <select
                id='orderType'
                value={orderType}
                onChange={(e) => setOrderType(e.target.value)}
              >
                <option value='Long'>롱</option>
                <option value='Short'>숏</option>
              </select>
            </td>
          </tr>
          <tr>
            <td colSpan='2' className='button-container'>
              <button className='full-width-button' onClick={createOrder}>
                주문 생성
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      {/* 주문 목록 테이블 */}
      <table className='orders-table'>
        <thead>
          <tr>
            <th>티커</th>
            <th>지정가</th>
            <th>주문 방향</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td>{order.symbol}</td>
              <td>{order.price}</td>
              <td>{order.orderType}</td>
              <td>
                <button onClick={() => deleteOrder(index)}>삭제</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* 홈으로 돌아가는 링크 */}
      <div>
        <Link to='/' className='link-to-home'>
          홈으로 돌아가기
        </Link>
      </div>
      <div>
        <Link to='/chart'>차트 보기</Link>
      </div>
    </div>
  );
};

export default Order;

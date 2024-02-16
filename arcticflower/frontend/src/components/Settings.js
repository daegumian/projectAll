import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../CSS/Settings.css"; // Settings.css 파일을 가져옵니다.

// 거래 설정을 담당하는 컴포넌트입니다.
const Settings = () => {
  const [leverage, setLeverage] = useState(1);
  const [marginCall, setMarginCall] = useState("apply");
  const [exchangeType, setExchangeType] = useState("fixed");
  const [fixedRate, setFixedRate] = useState("");
  const [tradeAction, setTradeAction] = useState("start");
  const [stopStartDate, setStopStartDate] = useState("");
  const [stopEndDate, setStopEndDate] = useState("");

  const handleSaveLeverage = () => {
    alert(`바이낸스 레버리지 ${leverage} 저장됨`);
  };

  const handleSaveMarginCall = () => {
    alert(`마진 콜 자동 청산 설정 ${marginCall} 저장됨`);
  };

  const handleSaveExchangeType = () => {
    alert(`거래 환율 유형 ${exchangeType} 저장됨`);
  };

  const handleSaveFixedRate = () => {
    alert(`고정 환율 값 ${fixedRate} 저장됨`);
  };

  const handleSaveTradeAction = () => {
    alert(`거래 동작 ${tradeAction} 저장됨`);
  };

  const handleSaveStopStartDate = () => {
    alert(`거래중지 예약 시작일 ${stopStartDate} 저장됨`);
  };

  const handleSaveStopEndDate = () => {
    alert(`거래중지 예약 종료일 ${stopEndDate} 저장됨`);
  };

  return (
    <div className='settings-container'>
      <h1>거래 설정</h1>

      <table className='settings-table'>
        <tbody>
          <tr>
            <th htmlFor='leverage'>바이낸스 레버리지</th>
            <td>
              <select
                id='leverage'
                value={leverage}
                onChange={(e) => setLeverage(e.target.value)}
              >
                {Array.from({ length: 10 }, (_, index) => (
                  <option key={index + 1} value={index + 1}>
                    x{index + 1}
                  </option>
                ))}
              </select>
            </td>
            <td>
              <button onClick={handleSaveLeverage}>저장</button>
            </td>
          </tr>

          <tr>
            <th htmlFor='marginCall'>마진 콜 자동 청산</th>
            <td>
              <select
                id='marginCall'
                value={marginCall}
                onChange={(e) => setMarginCall(e.target.value)}
              >
                <option value='apply'>적용</option>
                <option value='notApply'>적용안함</option>
              </select>
            </td>
            <td>
              <button onClick={handleSaveMarginCall}>저장</button>
            </td>
          </tr>

          <tr>
            <th htmlFor='exchangeType'>거래 환율 유형</th>
            <td>
              <select
                id='exchangeType'
                value={exchangeType}
                onChange={(e) => setExchangeType(e.target.value)}
              >
                <option value='fixed'>고정</option>
                <option value='dynamic'>반고정(실시간 환율)</option>
                <option value='notApply'>적용안함</option>
              </select>
            </td>
            <td>
              <button onClick={handleSaveExchangeType}>저장</button>
            </td>
          </tr>

          <tr>
            <th htmlFor='fixedRate'>고정 환율 값</th>
            <td>
              <input
                type='number'
                id='fixedRate'
                value={fixedRate}
                onChange={(e) => setFixedRate(e.target.value)}
                placeholder='환율을 입력하세요'
              />
            </td>
            <td>
              <button onClick={handleSaveFixedRate}>저장</button>
            </td>
          </tr>

          <tr>
            <th htmlFor='tradeAction'>거래 동작</th>
            <td>
              <select
                id='tradeAction'
                value={tradeAction}
                onChange={(e) => setTradeAction(e.target.value)}
              >
                <option value='start'>동작</option>
                <option value='stop'>정지</option>
              </select>
            </td>
            <td>
              <button onClick={handleSaveTradeAction}>저장</button>
            </td>
          </tr>

          <tr>
            <th htmlFor='stopStartDate'>거래중지 예약 시작일</th>
            <td>
              <input
                type='date'
                id='stopStartDate'
                value={stopStartDate}
                onChange={(e) => setStopStartDate(e.target.value)}
              />
            </td>
            <td>
              <button onClick={handleSaveStopStartDate}>저장</button>
            </td>
          </tr>

          <tr>
            <th htmlFor='stopEndDate'>거래중지 예약 종료일</th>
            <td>
              <input
                type='date'
                id='stopEndDate'
                value={stopEndDate}
                onChange={(e) => setStopEndDate(e.target.value)}
              />
            </td>
            <td>
              <button onClick={handleSaveStopEndDate}>저장</button>
            </td>
          </tr>
        </tbody>
      </table>

      {/* 홈으로 돌아가는 링크 */}
      <div>
        <Link to='/'>홈으로 돌아가기</Link>
      </div>
      <div>
        <Link to='/chart'>차트 보기</Link>
      </div>
      <div>
        <Link to='/order'>거래 생성</Link>
      </div>
    </div>
  );
};

export default Settings;

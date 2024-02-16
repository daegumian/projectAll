import React, { useState } from "react";
import "../CSS/Chart.css";
import { Link } from "react-router-dom";

const Chart = () => {
  // API로부터 받아온 데이터를 저장할 state
  const [ticker, setTicker] = useState("");
  const [entryKimchi, setEntryKimchi] = useState("");
  const [exitKimchi, setExitKimchi] = useState("");
  const [variation48H, setVariation48H] = useState("");
  const [fundingRate, setFundingRate] = useState("");
  const [orderBookRatio, setOrderBookRatio] = useState("");
  const [dailyVolume, setDailyVolume] = useState("");

  // API로부터 데이터를 가져와서 state를 업데이트하는 함수
  const fetchDataFromApi = async () => {
    try {
      // API 호출 및 데이터 받아오기
      const response = await fetch("API_ENDPOINT");
      const data = await response.json();

      // 데이터에서 필요한 정보 추출
      const {
        ticker,
        entryKimchi,
        exitKimchi,
        variation48H,
        fundingRate,
        orderBookRatio,
        dailyVolume,
      } = data;

      // state 업데이트
      setTicker(ticker);
      setEntryKimchi(entryKimchi);
      setExitKimchi(exitKimchi);
      setVariation48H(variation48H);
      setFundingRate(fundingRate);
      setOrderBookRatio(orderBookRatio);
      setDailyVolume(dailyVolume);
    } catch (error) {
      console.error("Error fetching data from API:", error);
    }
  };

  return (
    <div className='centered-container'>
      <h1>김프 차트</h1>

      <button onClick={fetchDataFromApi}>데이터 불러오기</button>

      <table>
        <thead>
          <tr>
            <th>티커</th>
            <th>진입김프</th>
            <th>탈출김프</th>
            <th>48H변동</th>
            <th>펀딩비</th>
            <th>호가비율</th>
            <th>일거래량</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{ticker}</td>
            <td>{entryKimchi}</td>
            <td>{exitKimchi}</td>
            <td>{variation48H}</td>
            <td>{fundingRate}</td>
            <td>{orderBookRatio}</td>
            <td>{dailyVolume}</td>
          </tr>
        </tbody>
      </table>
      {/* 홈으로 돌아가는 링크 */}
      <div>
        <Link to='/'>홈으로 돌아가기</Link>
      </div>
      <div>
        <Link to='/order'>거래 생성</Link>
      </div>
      <div>
        <Link to='/settings'>거래 환경설정</Link>
      </div>
    </div>
  );
};

export default Chart;

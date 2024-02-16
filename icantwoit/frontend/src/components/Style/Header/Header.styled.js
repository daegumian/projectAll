import React from "react";
import styled from "styled-components";

// 페이지 상단의 섹션을 스타일링하는 컴포넌트
export const Header = styled.section`
  width: 100%;
  height: 80vh; // 높이 설정
  position: relative; // 겹치지 않게 설정
  display: flex;
  justify-content: center; // 가운데 정렬
  overflow: hidden; // 넘치는 부분 감추기
  align-items: center; // 세로 중앙 정렬

  &::before {
    content: ""; // 가상 요소 생성
    position: absolute; // 절대 위치 설정
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    max-width: 100%; // 최대 너비 설정
    min-width: 40px; // 최소 너비 설정
    display: inline-block; // 인라인 블록 요소로 설정
    border-radius: 0 0 50% 50% / 0 0 100% 100%; // 타원형 모양 설정
    transform: scaleX(1.5); // 가로 스케일 설정
    background-position: right top; // 배경 이미지 위치 설정
    background-size: 100vw 200px; // 배경 이미지 크기 설정
    background-color: #282c34; // 배경 색상 설정
  }
`;

// 메인 헤더를 스타일링하는 컴포넌트
export const MainHeader = styled.div`
  position: relative; // 상대 위치 설정
  z-index: 1; // 스택 순서 설정 (다른 요소 위에 표시되도록)
  margin: 0 auto; // 가운데 정렬
  max-width: 500px; // 최대 너비 설정
  background-color: transparent; // 투명 배경
`;

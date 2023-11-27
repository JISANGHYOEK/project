import React, { useState } from "react";
import HeaderComponent from "../Header/Header";
import FooterComponent from "../Footer/Footer";
import "./CscPage.css"; // CSS 파일 경로에 맞게 수정

const CscPage = () => {
  // 하드코딩된 자주 묻는 질문 데이터
  const faqData = [
    {
      question: `무료 추천 프로그램은 어떻게 운영되나요?`,
      answer: `무료 추천주는 전문가대표이사님이 직접 당일 8시부터 실시간 댓글로 시작합니다.
        - 종목 추천 시간은 오전 9시 00분 ~ 9시 20분 사이에 제공해 드립니다.
        - 종목 추천과 동시에 매수가 및 1차 목표가, 손절가를 잡아드립니다.
        
        ※ 무료 추천주는 수급과 단기 성격이 강한 종목들로 장 시작과 함께 종목 추천드리고 있습니다. 
        
        단기 매매는 수급과 이슈 호가 창만 보고 매매를 들어가야 됩니다.
        빠른 상황 판단과 시장가 매수는 필수입니다.
        초보자분들이 따라 하시기에는 힘드실 수 있습니다. `,
    },
    {
      question: "무료 추천 프로그램 특징이 무엇인가요?",
      answer: `- 무료 추천주는 수급과 단기 성격이 강한 종목들로 장 시작과 함께 종목 추천드리고 있습니다.

        - 단기 매매는 수급과 이슈 호가 창만 보고 매매를 들어가야 됩니다.
        
        - 단기 매매는 장 초반 30분 안에 수급과 세력의 움직임을 포착하여 매수와 매도가 빠르게 이루어져야 합니다.
        
        - 빠른 상황 판단과 시장가 매수는 필수입니다.
        
        - 하루 상승분의 90% 정도가 장 시작 후 오전 30분 이내에 결정됩니다.
        
        - 당일 매매로 승부를 원한다면 오전 30분을 잘 활용해야 합니다. 
        
        - 보통 포지션별 승부는 10분 이내에 종료하는 것이 정석입니다.
        
        - 추천 종목들이 보통 1차 목표가 달성 후에도 추가적으로 상승이 많이 나오는 편입니다.
        
        `,
    },
    {
      question: `VIP 혜택이 무엇인가요?`,
      answer: `VIP 혜택에 대해서 알려드립니다. 

            1. 연구원 전문가님들의 리딩 서비스 제공
            
            2. VIP 회원 전용 주식정보 제공`,
    },
    {
      question: `유료 회원 가입 비용과 가입 및 진행은 어떻게 되나요?`,
      answer: `가입비용과 가입 및 진행은 
            정의연 이사
            tel. 010-6739-3392
            email. fhwm5558@naver.com
            로 연락주시면 자세하게 안내해드리겠습니다.`,
    },
    {
      question: `회원가입은 무료인가요?`,
      answer: `기본적인 회원가입은 무료이며,
            가입 후 무료 추천 종목을 받아 보실 수 있으십니다.
            세부적인 종목 추천 및 상담은 VIP매매 회원가입을 추천 드립니다.`,
    },
  ];

  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const toggleAnswer = (index) => {
    if (selectedQuestion === index) {
      setSelectedQuestion(null);
    } else {
      setSelectedQuestion(index);
    }
  };

  return (
    <div>
      <HeaderComponent />

      
        <div className="csc-title">자주 묻는 질문</div>
        <div className="csc-container">
        <div className="faq-list">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="faq-item"
              onClick={() => toggleAnswer(index)}
            >
              <h3 className="question">{faq.question}</h3>
              {selectedQuestion === index && (
                <p className="answer">
                  {faq.answer.split("\n").map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
      <FooterComponent />
    </div>
  );
};

export default CscPage;

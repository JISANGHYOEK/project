import React from "react";
import { Group } from "../../components/Group";
import { Link } from "../../components/Link";
import { LinkWrapper } from "../../components/LinkWrapper";
import { OrderedListItem } from "../../components/OrderedListItem";
import "./style.css";

export const Index = () => {
  return (
    <div className="index">
      <div className="div-wrap">
        <header className="header">
          <div className="list-item">
            <div className="link-2">회원가입</div>
          </div>
          <div className="div-wrapper">
            <div className="link-3">로그인</div>
          </div>
        </header>
        <div className="overlap">
          <div className="header-nav">
            <div className="view">
              <div className="overlap-group-2">
                <div className="link-AP-wrapper">
                  <div className="link-AP">만랩트레이더</div>
                </div>
                <div className="pseudo">
                  <div className="text-wrapper-4">NEW</div>
                </div>
              </div>
            </div>
            <div className="overlap-2">
              <div className="pseudo-wrapper">
                <div className="pseudo-2">
                  <div className="text-wrapper-5">LIVE</div>
                </div>
              </div>
              <Link className="link-instance" />
            </div>
            <div className="link-instance-wrapper">
              <LinkWrapper className="design-component-instance-node" />
            </div>
            <OrderedListItem className="ordered-list-item-link" />
            <div className="ordered-list-item-2">공지사항</div>
            <div className="ordered-list-item-3">입금 확인</div>
            <div className="ordered-list-item-4">자주 묻는 질문</div>
          </div>
          <div className="pseudo-3">
            <div className="text-wrapper-6">HOT</div>
          </div>
          <div className="view-2" />
          <div className="ordered-list-item-5" />
          <Group className="group-4" />
          <div className="pseudo-4">
            <div className="text-wrapper-4">NEW</div>
          </div>
        </div>
        <div className="div-main-wrap">
          <div className="div-swiper-container">
            <div className="overlap-group-3">
              <img
                className="img"
                alt="Link"
                src="https://cdn.animaapp.com/projects/654a176b6db7327b4fab4c8d/releases/654c9f9e7f36c9c9cf2fbc17/img/link.svg"
              />
              <div className="link-main-thumb" />
            </div>
            <div className="button-go-to-slide" />
            <div className="button-go-to-slide-2" />
            <div className="button-go-to-slide-3" />
          </div>
          <div className="div-free-rec">
            <div className="heading">무료 추천 종목</div>
          </div>
          <div className="div-vip-rec">
            <div className="heading-VIP">VIP 추천 종목</div>
          </div>
          <div className="div-vip-trade">
            <div className="heading-VIP-2">VIP 매매 결산</div>
          </div>
          <div className="div-stock-consult">
            <div className="heading-2">프로그램 매매 결산</div>
          </div>
          <div className="div-main-con">
            <div className="list-item-2">회원수</div>
            <div className="list-item-3">516,864</div>
            <div className="list-item-4" />
            <div className="list-item-5">방문수</div>
            <div className="list-item-6">341,945</div>
            <div className="list-item-7" />
            <div className="list-item-8">접속자</div>
            <div className="list-item-9">101,761</div>
          </div>
          <div className="div-main-con-2">
            <div className="text-wrapper-7">공지사항</div>
            <div className="list-item-link-AP">예시</div>
            <div className="list-item-10" />
            <p className="list-item-link">
              수익 인증 후기를 올려주시면 추첨을 통해 주식투자지원금 100만원을
              지급해 드립니다.
            </p>
          </div>
          <div className="div-latest-zinez">
            <div className="span-border-ticker">
              <div className="pseudo-5" />
            </div>
            <div className="link-4">2023년 무료추천종목</div>
            <div className="link-5">더보기</div>
            <div className="list-item-11">
              <div className="span-day">
                <div className="text-wrapper-8">01</div>
              </div>
              <div className="text-wrapper-9">2023.11</div>
              <div className="heading-link">
                <img
                  className="pseudo-6"
                  alt="Pseudo"
                  src="https://cdn.animaapp.com/projects/654a176b6db7327b4fab4c8d/releases/654c9f9e7f36c9c9cf2fbc17/img/pseudo.gif"
                />
                <p className="element">
                  <span className="span">11월 1일 수요일 무료추천종목</span>
                  <span className="text-wrapper-10">-5.94%</span>
                  <span className="span">(1전/1패)</span>
                </p>
              </div>
              <div className="overlap-group-4">
                <div className="heading-3">[+</div>
                <div className="heading-4">61</div>
                <div className="heading-5"> ]</div>
              </div>
            </div>
            <div className="list-item-12">
              <div className="text-wrapper-11">·</div>
              <div className="text-wrapper-12">2023-10-31</div>
              <div className="link-6">
                <p className="p">
                  <span className="span">10월 31일 화요일 무료추천종목</span>
                  <span className="text-wrapper-10">-5.50%</span>
                  <span className="span">(1전/1패)</span>
                </p>
              </div>
              <div className="overlap-3">
                <div className="text-wrapper-13">[+</div>
                <div className="text-wrapper-14">61</div>
                <div className="text-wrapper-15"> ]</div>
              </div>
            </div>
            <div className="list-item-13">
              <div className="text-wrapper-11">·</div>
              <div className="text-wrapper-12">2023-10-30</div>
              <div className="link-6">
                <div className="text-wrapper-16">
                  10월 30일 월요일 무료추천종목
                </div>
              </div>
              <div className="overlap-4">
                <div className="text-wrapper-17">[+</div>
                <div className="text-wrapper-18">49</div>
                <div className="text-wrapper-15"> ]</div>
              </div>
            </div>
            <div className="list-item-14">
              <div className="text-wrapper-11">·</div>
              <div className="text-wrapper-12">2023-10-27</div>
              <div className="link-6">
                <div className="text-wrapper-16">
                  10월 27일 금요일 무료추천종목
                </div>
              </div>
              <div className="overlap-3">
                <div className="text-wrapper-13">[+</div>
                <div className="text-wrapper-14">57</div>
                <div className="text-wrapper-15"> ]</div>
              </div>
            </div>
            <div className="list-item-15">
              <div className="text-wrapper-11">·</div>
              <div className="text-wrapper-12">2023-10-26</div>
              <div className="link-6">
                <p className="p">
                  <span className="span">10월 26일 목요일 무료추천종목</span>
                  <span className="text-wrapper-10">-6.06%</span>
                  <span className="span">(1전/1패)</span>
                </p>
              </div>
              <div className="overlap-3">
                <div className="text-wrapper-13">[+</div>
                <div className="text-wrapper-14">61</div>
                <div className="text-wrapper-15"> ]</div>
              </div>
            </div>
            <div className="list-item-16">
              <div className="text-wrapper-11">·</div>
              <div className="text-wrapper-12">2023-10-25</div>
              <div className="link-6">
                <p className="element-2">
                  <span className="span">10월 25일 수요일 무료추천종목</span>
                  <span className="text-wrapper-19">+6.32%</span>
                  <span className="span">(1전/1승)</span>
                </p>
              </div>
              <div className="overlap-3">
                <div className="text-wrapper-13">[+</div>
                <div className="text-wrapper-14">68</div>
                <div className="text-wrapper-15"> ]</div>
              </div>
            </div>
            <div className="list-item-17">
              <div className="text-wrapper-11">·</div>
              <div className="text-wrapper-12">2023-10-24</div>
              <div className="link-6">
                <div className="text-wrapper-16">
                  10월 24일 화요일 무료추천종목
                </div>
              </div>
              <div className="overlap-3">
                <div className="text-wrapper-13">[+</div>
                <div className="text-wrapper-14">57</div>
                <div className="text-wrapper-15"> ]</div>
              </div>
            </div>
            <div className="list-item-18">
              <div className="text-wrapper-11">·</div>
              <div className="text-wrapper-12">2023-10-23</div>
              <div className="link-6">
                <p className="p">
                  <span className="span">10월 23일 월요일 무료추천종목</span>
                  <span className="text-wrapper-10">-7.83%</span>
                  <span className="span">(1전/1패)</span>
                </p>
              </div>
              <div className="overlap-3">
                <div className="text-wrapper-13">[+</div>
                <div className="text-wrapper-14">61</div>
                <div className="text-wrapper-15"> ]</div>
              </div>
            </div>
          </div>
          <div className="div-lat">
            <div className="span-border-ticker-2">
              <div className="pseudo-5" />
            </div>
            <div className="heading-link-2">입금확인</div>
            <div className="heading-link-3">더보기</div>
            <div className="list-item-19">
              <div className="span-day-2">
                <div className="text-wrapper-8">01</div>
              </div>
              <div className="text-wrapper-20">2023.11</div>
              <div className="link-7">
                <div className="text-wrapper-21">확인 부탁드립니다.</div>
              </div>
              <div className="span-new-icon" />
              <div className="i-fa-lock" />
            </div>
            <div className="list-item-20">
              <div className="span-day-2">
                <div className="text-wrapper-8">01</div>
              </div>
              <div className="text-wrapper-20">2023.11</div>
              <div className="link-8">
                <div className="text-wrapper-22">vip 입금확인 부탁드려요</div>
              </div>
              <div className="span-new-icon-2" />
              <div className="i-fa-lock-2" />
            </div>
            <div className="list-item-21">
              <div className="span-day-2">
                <div className="text-wrapper-8">01</div>
              </div>
              <div className="text-wrapper-20">2023.11</div>
              <div className="link-8">
                <div className="text-wrapper-22">vip 입금확인 부탁드려요</div>
              </div>
              <div className="span-new-icon-2" />
              <div className="i-fa-lock-2" />
            </div>
            <div className="list-item-22">
              <div className="span-day-2">
                <div className="text-wrapper-23">31</div>
              </div>
              <div className="text-wrapper-24">2023.10</div>
              <div className="link-8">
                <div className="text-wrapper-22">vip 입금확인 부탁드려요</div>
              </div>
              <div className="span-new-icon-2" />
              <div className="i-fa-lock-2" />
            </div>
            <div className="list-item-23">
              <div className="text-wrapper-23">31</div>
            </div>
            <div className="list-item-24">2023.10</div>
            <div className="list-item-link-2">
              <div className="text-wrapper-25">입금확인</div>
            </div>
            <div className="list-item-25" />
            <div className="list-item-26" />
          </div>
          <div className="div-lat-2">
            <div className="span-border-ticker-3">
              <div className="pseudo-7" />
            </div>
            <div className="heading-link-v-i-p">V.I.P 추천종목</div>
            <div className="heading-link-3">더보기</div>
            <div className="list-item-19">
              <div className="span-day-2">
                <div className="text-wrapper-26">26</div>
              </div>
              <div className="text-wrapper-24">2023.10</div>
              <div className="link-9">
                <p className="text-wrapper-27">10월 26일 목요일 VIP 추천종목</p>
              </div>
            </div>
            <div className="list-item-20">
              <div className="span-day-2">
                <div className="text-wrapper-28">12</div>
              </div>
              <div className="text-wrapper-24">2023.10</div>
              <div className="link-9">
                <p className="text-wrapper-29">10월 12일 목요일 VIP 추천종목</p>
              </div>
            </div>
            <div className="list-item-21">
              <div className="span-day-2">
                <div className="text-wrapper-30">06</div>
              </div>
              <div className="text-wrapper-24">2023.10</div>
              <div className="link-10">
                <p className="text-wrapper-31">10월 6일 금요일 VIP 추천종목</p>
              </div>
            </div>
            <div className="list-item-22">
              <div className="span-day-2">
                <div className="text-wrapper-28">21</div>
              </div>
              <div className="text-wrapper-32">2023.09</div>
              <div className="link-10">
                <p className="text-wrapper-31">9월 21일 목요일 VIP 추천종목</p>
              </div>
            </div>
            <div className="list-item-27">
              <div className="span-day-2">
                <div className="text-wrapper-23">13</div>
              </div>
              <div className="text-wrapper-32">2023.09</div>
              <div className="link-10">
                <p className="text-wrapper-31">9월 13일 수요일 VIP 추천종목</p>
              </div>
            </div>
            <div className="list-item-28">
              <div className="span-day-2">
                <div className="text-wrapper-33">25</div>
              </div>
              <div className="text-wrapper-32">2023.08</div>
              <div className="link-10">
                <p className="text-wrapper-34">8월 25일 금요일 VIP 추천종목</p>
              </div>
            </div>
            <div className="list-item-29">
              <div className="span-day-2">
                <div className="text-wrapper-35">24</div>
              </div>
              <div className="text-wrapper-36">2023.07</div>
              <div className="link-10">
                <p className="text-wrapper-34">7월 24일 월요일 VIP 추천종목</p>
              </div>
            </div>
            <div className="list-item-30">
              <div className="text-wrapper-8">10</div>
            </div>
            <div className="list-item-31">2023.07</div>
            <div className="list-item-link-3">
              <p className="text-wrapper-37">7월 10일 월요일 VIP 추천종목</p>
            </div>
          </div>
          <div className="div-lat-3">
            <div className="span-border-ticker-3">
              <div className="pseudo-7" />
            </div>
            <div className="heading-link-v-i-p">V.I.P 매매결산</div>
            <div className="heading-link-3">더보기</div>
            <div className="list-item-19">
              <div className="span-day-2">
                <div className="text-wrapper-38">30</div>
              </div>
              <div className="text-wrapper-24">2023.10</div>
              <div className="link-11">
                <div className="text-wrapper-39">마음AI (377480)</div>
              </div>
              <div className="span-new-icon-3" />
            </div>
            <div className="list-item-20">
              <div className="span-day-2">
                <div className="text-wrapper-40">27</div>
              </div>
              <div className="text-wrapper-24">2023.10</div>
              <div className="link-12">
                <div className="text-wrapper-41">대화제약 (067080)</div>
              </div>
            </div>
            <div className="list-item-21">
              <div className="span-day-2">
                <div className="text-wrapper-40">27</div>
              </div>
              <div className="text-wrapper-24">2023.10</div>
              <div className="link-12">
                <div className="text-wrapper-41">코리아나 (027050)</div>
              </div>
            </div>
            <div className="list-item-22">
              <div className="span-day-2">
                <div className="text-wrapper-40">27</div>
              </div>
              <div className="text-wrapper-24">2023.10</div>
              <div className="link-11">
                <div className="text-wrapper-39">마음AI (377480)</div>
              </div>
            </div>
            <div className="list-item-27">
              <div className="span-day-2">
                <div className="text-wrapper-40">27</div>
              </div>
              <div className="text-wrapper-24">2023.10</div>
              <div className="link-13">
                <div className="text-wrapper-42">신성이엔지 (011930)</div>
              </div>
            </div>
            <div className="list-item-28">
              <div className="span-day-2">
                <div className="text-wrapper-33">25</div>
              </div>
              <div className="text-wrapper-24">2023.10</div>
              <div className="link-12">
                <div className="text-wrapper-41">코리아나 (027050)</div>
              </div>
            </div>
            <div className="list-item-29">
              <div className="span-day-2">
                <div className="text-wrapper-35">24</div>
              </div>
              <div className="text-wrapper-24">2023.10</div>
              <div className="link-11">
                <div className="text-wrapper-39">마음AI (377480)</div>
              </div>
            </div>
            <div className="list-item-30">
              <div className="text-wrapper-35">24</div>
            </div>
            <div className="list-item-32">2023.10</div>
            <div className="list-item-link-4">
              <div className="text-wrapper-43">네오셈 (253590)</div>
            </div>
          </div>
          <footer className="footer">
            <div className="overlap-5">
              <div className="div-f-util">
                <div className="list-item-link-5">회사소개</div>
                <div className="list-item-link-6">이용약관</div>
                <div className="list-item-link-7">개인정보처리방침</div>
                <div className="list-item-link-8">모바일버전</div>
              </div>
              <img
                className="p-go-top"
                alt="P go top"
                src="https://cdn.animaapp.com/projects/654a176b6db7327b4fab4c8d/releases/654c9f9e7f36c9c9cf2fbc17/img/p-go-top.svg"
              />
            </div>
            <p className="text-wrapper-44">
              유한회사 에이투플러스 │ 대표자 : 황하 │ 서울특별시 서초구 논현로
              123 │ TEL 1833-6014 │ sky_kospi@naver.com
            </p>
            <p className="text-wrapper-45">
              사업자등록번호 222-86-00230 │ 법인등록번호 206214-0014050 │
              통신판매업 신고 : 제 2017-전남여수-0099호
            </p>
            <p className="text-wrapper-46">
              개인정보관리책임자 : 전봉기 부장 sky_kospi@naver.com
            </p>
            <p className="text-wrapper-47">ⓒ 미래투자. ALL RIGHTS RESERVED.</p>
          </footer>
          <div className="div-main-con-3">
            <div className="text-wrapper-48">유튜브 따와줘요</div>
          </div>
          <div className="rectangle" />
          <img
            className="rectangle-2"
            alt="Rectangle"
            src="https://cdn.animaapp.com/projects/654a176b6db7327b4fab4c8d/releases/654c9f9e7f36c9c9cf2fbc17/img/rectangle-5@2x.png"
          />
          <div className="rectangle-3" />
        </div>
      </div>
    </div>
  );
};

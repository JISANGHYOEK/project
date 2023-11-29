import React from "react";
import { Link } from "react-router-dom";
import "./FreeReWrite.css";

function FreeReWriteHeader(props) {
  const { headersName, children } = props;

  return (
    <div className="FreeRe-header">
      <Link to="/FreeReWritePage">
        <button align="right" className="FreeRe-view-go-list-btn">
          게시글 작성
        </button>
      </Link>
    </div>
  );
}

export default FreeReWriteHeader;

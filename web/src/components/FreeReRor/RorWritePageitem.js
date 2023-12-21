import React, { useEffect, useState, useRef, useCallback } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./RorWrite.css";

import { createReactEditorJS } from "react-editor-js";
import { EDITOR_JS_TOOLS } from "./constants";

const ReactEditorJS = createReactEditorJS();

function RorWritePageitem() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  // const [content, setContent] = useState("");
  const editorInstance = useRef(null);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  // const handleContentChange = (e) => {
  //   setContent(e.target.value);
  // };

  // useEffect(() => {
  //   axios
  //     .get("http://10000mr.com:8080/RorPage/RorWrtiePage")
  //     .then((response) => {
  //       setCategory(response.data);
  //     });
  // }, []);

  // const categories = Object.values(category).map((item) => (
  //   <option key={item.id} value={item.id}>
  //     {item.displayName}
  //   </option>
  // ));
  const handleInitialize = useCallback((instance) => {
    if (!editorInstance.current) {
      editorInstance.current = instance;
    }
  }, []);

  // const setInstanceRef = useCallback((instance) => {
  //   if (!editorInstance.current) {
  //     editorInstance.current = instance;
  //   }
  // }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title) {
      alert("제목을 입력해주세요.");
      return;
    }
    if (editorInstance.current) {
      const convertToPlainText = (content) => {
        console.log(content.blocks);
        return content.blocks
          .map((block) => {
            switch (block.type) {
              case "paragraph":
              case "header":
                return block.data.text;
              // 다른 타입의 블록들도 이런 식으로 처리해줄 수 있습니다.
              // case "list":
              //   return block.data.items.join("\n");

              default:
                return "";
            }
          })
          .join("\n");
      };
      try {
        const content = await editorInstance.current.save();

        if (!content || !content.blocks || !content.blocks.length) {
          alert("내용을 입력해주세요.");
          return;
        }

        const textContent = convertToPlainText(content);

        console.log(textContent);

        const data = {
          title: title,
          content: textContent,
        };

        axios
          .post("http://10000mr.com:8080/api/Ror", data, {
            withCredentials: true,
          })
          .then((response) => {
            navigate("/RorPage");
            alert("게시물이 게시되었습니다.");
          })
          .catch((error) => {
            console.error(error);
            alert("게시물 생성에 에러가 발생하였습니다.");
          });
      } catch (error) {
        console.error(error);
        alert("에러가 발생하였습니다.");
      }
    }
  };

  return (
    <div>
      <h2 align="center">게시글 작성</h2>
      <div className="Ror-view-wrapper">
        <div className="Ror-view-row">
          <label>제목</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        <div className="Ror-view-row">
          <label>내용</label>
          <ReactEditorJS
            onInitialize={handleInitialize}
            tools={EDITOR_JS_TOOLS}
            // instanceRef={setInstanceRef}
            defaultValue={{
              blocks: [],
            }}
          />
        </div>
        <button
          type="button"
          className="Ror-view-go-list-btn"
          onClick={handleSubmit}
        >
          등록
        </button>
      </div>
    </div>
  );
}

export default RorWritePageitem;

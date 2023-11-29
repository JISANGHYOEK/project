import React, {useEffect, useState} from 'react';
import axios from "axios";

function FreeRePageitem(){
    const [boardList, setBoardList] = useState([]);

    const getBoardList = async () => {
        const resp = await (await axios.get('//10000mr.com:8080/FreeRePage')).data; // 2) 게시글 목록 데이터에 할당  
        setBoardList(resp.data); // 3) boardList 변수에 할당
        console.log(boardList)
    }

    useEffect(() => {
        getBoardList(); // 1) 게시글 목록 조회 함수 호출
    }, []);
    
    return(
        <div>
            <h1><label className='label-title'>무료 추천 종목</label></h1>
            <div className='form-container'> 
                <ul>
                    {boardList.map((board) => ( // 4) map 함수로 데이터 출력
                    <li key={board.idx}>{board.title}</li>
                    ))}
                </ul>
            </div>
        </div>
    )

}

export default FreeRePageitem;
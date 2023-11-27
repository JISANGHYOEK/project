import React, { useState } from 'react';
import MainHeaderComponent from '../Header/Header';
import FooterComponent from '../Footer/Footer';
import './AskPage.css'
const AskPage = () => {
    
    const [formData, setFormData] = useState({
        title: '',
        name: '',
        email: '',
        message: ``
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // 폼이 제출되었을 때 할 작업들을 처리하는 함수
        // 여기에 제출된 데이터를 어딘가에 저장하거나 다른 동작을 수행할 수 있습니다.
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }

    return (
        <div>
        <MainHeaderComponent />
        <div className="title-label"><label>1:1 문의하기</label></div>
        <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <label>
                        제목:
                        <input type="text" name="title" value={formData.name} onChange={handleChange}/>
                    </label>
                    <label>
                        이름:
                        <input type="text" name="name" value={formData.name} onChange={handleChange}/>
                    </label>
                    <br />
                    <label>
                        이메일:
                        <input type="email" name="email" value={formData.email} onChange={handleChange} />
                    </label>
                    <br />
                    <label>
                        문의 내용:
                        <textarea name="message" rows="4" cols="50" value={formData.message} onChange={handleChange}/>
                    </label>
                    <br />
                    <button type="submit">제출하기</button>
                </form>
            </div>
        <div>
        <FooterComponent />
        </div>
    </div>
    );
}

export default AskPage;
/* eslint-disable */
import './App.css';
import { useState } from 'react';

function App() {


  //값 변동 시 html자동 반영을 위해 state사용
  let [post,setPost] = useState('리액트 따라하기');
  let [post2,setPost2] = useState('JSX란?')
  let [post3,setPost3] = useState('React에서 state쓰는 법')

  //subject에 post1,2,3 배열형태로 담는 방법
  let [subject, setSubject] = useState(['리액트 따라하기','JSX란?','React에서 state 쓰는 법'])

  let [cntLike, setLike] = useState(0)
  let [modal, setModal] = useState(0)


  return (
    <div className="App">
      <div className="navy-nav">
        <h4 style={{fontSize : '20px'}}>React Blog</h4>
      </div>

      <button onClick={()=>{
        let tmp = [...subject]  
        tmp[0] = '리액트 따라하기!'
        setSubject(tmp)}}>수정</button>

        <button onClick={()=>{
          let tmp = [...subject]
          tmp.sort()
          console.log(tmp)
          setSubject(tmp)
        }}>정렬</button>

      <div className="list">
        <h4 onClick={()=>{
          modal == 1? setModal(0) : setModal(1)
          }}> {subject[0]} 
          <span onClick={()=>{setLike(cntLike+1)}}>👍</span> 
          {cntLike}
          </h4>
        <p>01.18 발행</p>
      </div>

      <div className="list">
        <h4>{subject[1]}</h4>
        <p>01.19 발행</p>
      </div>
      <div className="list">
        <h4>{subject[2]}</h4>
        <p>01.19 발행</p>
      </div>
      
      {
        modal == 1 ? <Modal></Modal> : null
      }

    </div>
  );
}

//Component - 함수 시작은 대문자
function Modal(){
  return(
    //의미없는 div의 사용대신 <></>사용 가능
    <>
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
    <div></div>
    </>
  )
}

export default App;

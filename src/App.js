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

  let [cntLike, setLike] = useState([0,0,0])
  let [modal, setModal] = useState(0)
  let [titleIdx, setTitleIdx] = useState(0)
  let [input1, setInput1] = useState('')


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

      {/* <div className="list">
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
       */}
      
      {
        //React 반복문 사용하는 방법 - map함수
        //파라미터(array, 증가변수)
        subject.map(function(i, idx){
          return (
            //key(고유값)에 대한 선언 및 사용 가능. 
            <div className="list" key={idx}>
            <h4 onClick={()=>{
              modal == 1? setModal(0) : setModal(1);
              setTitleIdx(idx)              
              }}> {i} 
              <span onClick={(e)=>{
                //상위html로 퍼지는 이벤트 버블링 막음 - 클릭과 같은 것
                e.stopPropagation();
                let tmp = [...cntLike]
                tmp[idx] = tmp[idx]+1
                setLike(tmp)
              }}>👍</span> 
              {cntLike[idx]}
              
              <button onClick={(e)=>{
                e.stopPropagation()
                let tmp = [...subject]
                tmp.splice(idx, 1)
                setSubject(tmp)

                let tmp2 = [...cntLike]
                tmp2.splice(idx,1)
                setLike(tmp2)
              }}>글삭제</button>
              </h4>
            <p>01.18 발행</p>
          </div>

          )
        })
      }
      
      {
        //React if문 사용하는 방법 - 삼항연산
        modal == 1 ? <Modal sub={titleIdx} sub1={subject} sub2={cntLike}></Modal> : null
      }

    <input type="text" onChange={(e)=>{
      setInput1(e.target.value)}}
    ></input>
    <button onClick={()=>{
      let tmp = [...subject]
      tmp.push(input1);
      setSubject(tmp)

      let tmp2 = [...cntLike]
      tmp2.push(0)
      setLike(tmp2)
    }
      }>글추가</button>

    </div>



  );
}

//Component - 함수 시작은 대문자
function Modal(props){
  return(
    //의미없는 div의 사용대신 <></>사용 가능
    <>
    <div className="modal">
      <h4>{props.sub1[props.sub]}  ({props.sub2[props.sub]})</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>글수정</button>
    </div>
    <div></div>
    </>
  )
}

export default App;

import {useState,useRef} from 'react'
function Contact() {
  const [count,setCount] =useState(0)
  let att = useRef(0)
  let getDom = useRef()
  let chDom = useRef()
  att.current=count
  let banner =useRef()

  let checkDom = ()=>{
    getDom.current.style.backgroundColor='blue'
  }
  function changeText(){
    banner.current.innerHTML="You have clicked Me"
  }

  return (
    <div id="contactPage">
   <h1 className="banner" ref={chDom}>Contacts</h1>
    <section className="text-area" ref={getDom}>
      <p> {att.current} </p>
      <button onClick={e=>{
        setCount(count +1)
      }}>
        Increment
      </button>
      <button onClick={checkDom}>Change color</button>
      <p ref={banner}>Have you clicked me ? </p>
      <button onClick={changeText}>Me</button>
    </section>
    </div>
  )
}

export default Contact
import {React,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const DashBoard = (props) => {
  const [list, setList] = useState()
  const [userDetails, setUserDetails] = useState({name:'',email:'',profilePic:''})

  useEffect(()=>{
    axios.get('http://localhost:3000/user/details')
    .then(response => {
      setUserDetails(response)
      console.log('fetched successfully')
    })
    .catch(error => {
      console.error(error);
    });
  },[])
  return (
    <div className="mainContainer">
      <div className={'titleContainer'}>
        <div>DashBoard</div>
      </div>
      <div>user Detials</div>
      <div>
        <label>name</label>
        <input
          value={userDetails?.name}
          placeholder="name"
          onChange={(ev) => setUserDetails()}
          className={'inputBox'}
        />
        <label >email</label>
        <input
          value={userDetails?.email}
          placeholder="email"
          onChange={(ev) => setUserDetails()}
          className={'inputBox'}
        />
      </div>
    </div>
  )
}

export default DashBoard
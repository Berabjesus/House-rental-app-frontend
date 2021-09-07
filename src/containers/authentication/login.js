import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {login} from '../../store/actions/authAction'
import Common from './common'
import Index from '../accomodation/'
import LoadingIcon from '../../components/common/loadingIcon';

const Login = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const setters = {setName, setPassword}
  const requestStatus = useSelector((state) => state.status);
  const authStatus = useSelector((state) => state.authentication);
  const dispatch = useDispatch();

  const handleClick = () => {
    const credentials = {
      username: name.trim(),
      password: password.trim(),
    }
    dispatch(login(credentials));
  }
  if (requestStatus.loading){
    return (
        <LoadingIcon />
    )
  }
  if (authStatus.isLoggedIn && authStatus.token) {
    return (
      <Index/>
    )
  }
  return (
    <Common clickhandler = {handleClick} setters= {setters}/>
  )
}

export default Login;
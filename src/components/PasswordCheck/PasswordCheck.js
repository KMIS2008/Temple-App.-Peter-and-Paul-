import { useDispatch, useSelector } from 'react-redux';
import {checkPassword} from '../../redux/operations';
import {selectPassword} from '../../redux/check/selects';
import { useState } from 'react';
import {Container, Input, ButtonCheck, ButtonSuccess} from './PasswordCheck.styled';

export const PasswordCheck=()=>{
    const password=useSelector(selectPassword)
    const [showpassword, setPassword] = useState('');
    const dispatch=useDispatch()

    const handleInputChange =(e)=>{
        setPassword(e.target.value)
    }

    const handleCheckPassword=()=>{
        dispatch(checkPassword(showpassword))
    }

    const handleButtonClick = () => {
         console.log(password)
         alert('Кнопка відкрита!');
      };


    return(
        <>
         <Container>
           <h3>Введите пароль</h3>
             <Input
        type="password"
        // value={password}
        onChange={handleInputChange}
        placeholder="Введите пароль"
      />
      <ButtonCheck
        onClick={handleCheckPassword}
      >
        Проверить пароль
      </ButtonCheck>
      
      {password.success && (
        <ButtonSuccess
          onClick={handleButtonClick}

        >
          Открыть
        </ButtonSuccess>
      )}
    </Container>
        </>
    )
}
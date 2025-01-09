import { useDispatch, useSelector } from 'react-redux';
import {checkPassword, fetchService} from '../../redux/operations';
import {selectPassword} from '../../redux/check/selects';
import { useState } from 'react';
import {Container, Input, ButtonCheck, ContainerButton, ButtonSuccess} from './PasswordCheck.styled';
import {AnswerService} from '../../components/Answer/AnswerService';
import { selectService } from 'redux/services/selects';

export const PasswordCheck=()=>{
    const password=useSelector(selectPassword)
    const [showpassword, setPassword] = useState('');
    const [showFilter,setFilter]=useState('');
    const services=useSelector(selectService);
    const dispatch=useDispatch();

    const handleInputChange =(e)=>{
        setPassword(e.target.value)
    }

    const handleCheckPassword=()=>{
        dispatch(checkPassword(showpassword))
        dispatch(fetchService())
    }

    const handleFilter = (type) => {
         setFilter(type)
      };

    const filteredData = services.filter((item) => item.type.trim() === showFilter.trim());
   

    return(
        <>
         <Container>
           <h3>Введіть пароль</h3>
             <Input
        type="password"
        // value={password}
        onChange={handleInputChange}
        placeholder="Введіть пароль"
      />
      <ButtonCheck
        onClick={handleCheckPassword}
      >
        Перевірити пароль
      </ButtonCheck>
      
      {password.success && (
        <ContainerButton>
          <ButtonSuccess
          onClick={()=>handleFilter("За здоров'я")}
        >
          Записки за здоров'я
          </ButtonSuccess>
          <ButtonSuccess
          onClick={()=>handleFilter("За упокій")}
        >
          Записки за упокій
          </ButtonSuccess>
        </ContainerButton>  
      )}

      {showFilter&&<AnswerService services={filteredData}/>}

    </Container>
        </>
    )
}
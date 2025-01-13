import { useDispatch, useSelector } from 'react-redux';
import { checkPassword, fetchService } from '../../redux/operations';
import { selectPassword } from '../../redux/check/selects';
import { useState } from 'react';
import { Container, Input, ButtonCheck, ContainerButton, ButtonSuccess, PasswordWrapper, EyeIcon } from './PasswordCheck.styled';
import { AnswerService } from '../../components/Answer/AnswerService';
import { selectService } from 'redux/services/selects';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Импорт иконок
import { useLocation } from 'react-router-dom'; // Импорт useLocation

export const PasswordCheck = () => {
    const password = useSelector(selectPassword);
    const [showPassword, setShowPassword] = useState(false);
    const [passwordValue, setPasswordValue] = useState('');
    const [showFilter, setFilter] = useState('');
    const services = useSelector(selectService);
    const dispatch = useDispatch();
    const location = useLocation(); // Получение текущего пути

    const handleInputChange = (e) => {
        setPasswordValue(e.target.value);
    };

    const handleCheckPassword = () => {
        dispatch(checkPassword(passwordValue));
        dispatch(fetchService());
    };

    const handleFilter = (type) => {
        setFilter(type);
    };

    const filteredData = services.filter((item) => item.type.trim() === showFilter.trim());

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <>
            <Container>
                <h3>Введіть пароль</h3>
                <PasswordWrapper>
                    <Input
                        type={showPassword ? 'text' : 'password'}
                        value={passwordValue}
                        onChange={handleInputChange}
                        placeholder="Введіть пароль"
                    />
                    <EyeIcon onClick={togglePasswordVisibility}>
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </EyeIcon>
                </PasswordWrapper>
                <ButtonCheck onClick={handleCheckPassword}>Перевірити пароль</ButtonCheck>

                {/* Проверяем текущий путь и успешность проверки пароля */}
                {password.success && location.pathname === '/online-services' && (
                    <ContainerButton>
                        <ButtonSuccess onClick={() => handleFilter("За здоров'я")}>
                            Записки за здоров'я
                        </ButtonSuccess>
                        <ButtonSuccess onClick={() => handleFilter("За упокій")}>
                            Записки за упокій
                        </ButtonSuccess>
                    </ContainerButton>
                )}

                {password.success && location.pathname === '/feedback' && (
                    <ContainerButton>
                        <ButtonSuccess >
                            Листи
                        </ButtonSuccess>
                    </ContainerButton>
                )}

                {showFilter && <AnswerService services={filteredData} />}
            </Container>
        </>
    );
};
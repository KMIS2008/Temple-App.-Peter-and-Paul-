import { useEffect, useState } from 'react';
// import icon from '../../images/icon.jpg';
import churchHeader from '../../images/churcnHeader.jpg';
import { Container, ContainerTitle, ContainerTitleHeader, ContaterHeder, Title, Svg, Img,ImgHeader
  //  ContainerSvgCart, ContainerNavigate, CounterCarts 
} from './Header.styled';
// import { useLocation, useNavigate } from 'react-router-dom';
import sprite from '../../images/sprite.svg';

import { Burgermenu } from 'components/Burgermenu/Burgermenu';
import { NavigationLinks } from 'components/NavigationLinks/NavigationLinks';
import cross from '../../images/18-removebg-preview.png';
// import {User} from '../User/User';

// import { AuthenticationLinks } from 'components/AuthenticationLinks/AuthenticationLinks';

// import {selectIdOrders} from '../../redux/selects';
// import {selectIsLoggedIn} from '../../redux/auth/selects';
// import { useSelector } from 'react-redux';



export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTablet, setIsTablet] = useState(window.innerWidth < 1440);

  // const location = useLocation();
  // const navigate = useNavigate();
  // const orders = useSelector(selectIdOrders);
  // const numberOfOrders = orders.length;
  // const isLoggedIn=useSelector(selectIsLoggedIn);

  // const isHome = location.pathname === '/home';
  // const isMedicine = location.pathname === '/medicine';
  // const isStore = location.pathname === '/medicine-store'; 
  // const isProduct = location.pathname === '/product';
  // const isCart = location.pathname === '/cart';

  // const handleNavigate = () => {
  //   navigate('/cart');
  // }

  const handleBurgerMenu = () => {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth < 1440);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return(
  
    <Container>
      <ContainerTitle>

        <ImgHeader src={cross} alt='cross'/>
        
        <ContainerTitleHeader>
          <Title>Церква апостолів Петра і Павла с. Петропавлівське</Title> 
          <Title>Православна церква України</Title>           
        </ContainerTitleHeader>

        {(isTablet) && (
          <Svg onClick={handleBurgerMenu}>
            <use xlinkHref={sprite + '#icon-burgermenu'} />
          </Svg>
        )} 
            
      </ContainerTitle>

      <Img src={churchHeader} alt='chuch'/>
      <ContaterHeder>
        {/* <img src={icon} alt='cross' width={30} height={30}/> */}
        

             {isOpen && <Burgermenu onClose={handleBurgerMenu} />}

      </ContaterHeder> 

        {!isTablet&&(
             <NavigationLinks styledisplay={true} isHeader={true} setIsOpen={setIsOpen} position={true}/>
        )}     

    </Container>

  )

  // return (
  //   <ContaterHeder $isHome={isHome}>
  //     <Logo />

  //     {!isTablet&&(
  //            <NavigationLinks styledisplay={true} isHeader={true} setIsOpen={setIsOpen}/>
  //       )}

  //     <ContainerNavigate>
  //       {((isMedicine || isStore || isProduct ||isCart ||isHome)&&isLoggedIn) && (
  //         <ContainerSvgCart>
  //           <svg width={16} height={16} onClick={handleNavigate}>
  //             <use xlinkHref={sprite + '#icon-shopping-cart'} />
  //           </svg>
  //           <CounterCarts>{numberOfOrders}</CounterCarts>
            
  //         </ContainerSvgCart>
  //       )}

  //       {isLoggedIn&&<User/>}
        
        // {(isHome && isTablet) && (
        //   <Svg onClick={handleBurgerMenu}>
        //     <use xlinkHref={sprite + '#icon-burgermenu'} />
        //   </Svg>
        // )} 
        
  //       {((isMedicine||isStore||isProduct||isCart)&& isTablet) && (
  //         <Svg onClick={handleBurgerMenu}>
  //           <use xlinkHref={sprite + '#icon-burgermenu-green'} />
  //         </Svg>
  //       )}

  //       {!isTablet&&<AuthenticationLinks/>}

  //     </ContainerNavigate>

  //     {isOpen && <Burgermenu onClose={handleBurgerMenu} />}
  //   </ContaterHeder>
  // );
}

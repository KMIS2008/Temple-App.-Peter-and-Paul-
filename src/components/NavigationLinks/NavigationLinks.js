import {Container, Button} from './NavigationLinks.styled';
import {useLocation} from 'react-router-dom';



export const NavigationLinks=({stylefooter=false, isHeader=false, styledisplay=false, 
                               setIsOpen= () => {}, onClose= () => setIsOpen(false), position=false})=>{
    const location = useLocation();

    const handleClick = () => {    
        onClose();
    };

    // const handleHomeClick = () => {    
    //     onClose();
    // };
    // const handleHomeMedicineStore = () => {
    //     onClose();   
    // };
    // const handleHomeMedicine = () => {
    //     onClose();     
    // };

    const isHomeActive = location.pathname === '/home';
    const isAboutUsActive = location.pathname === '/about-us';
    const isSchedule= location.pathname ==='/schedule';
    const isVirtualTour = location.pathname === '/virtual-tour';
    const isPrayer=location.pathname === '/prayer';
    const isDonation = location.pathname === '/donation';
    const isOnlineServices = location.pathname === '/online-services';
    const isСhoir = location.pathname === '/choir';
    const isSundaySchool = location.pathname === '/sunday-school';
    const isFeedback = location.pathname === '/feedback';


    return(
        <Container $styledisplay={styledisplay} $position={position}>
            
           <Button $stylefooter={stylefooter} 
                   $isHeader={isHeader} 
                   $isActiveHome={isHomeActive}
                   type="button" 
                   onClick={handleClick}
                   to="/home"
                   style={{
                      backgroundColor: isHomeActive? 'transparent' : 'white',
                         color: isHomeActive ? 'white' : '#0047AB',
                         border: isHomeActive&&!stylefooter ? '4px solid white' : '1.15px solid #F1F1F1',
                }}
            > Головна</Button>

            
           <Button $stylefooter={stylefooter} 
                   $isHeader={isHeader} 
                   type="button" 
                   onClick={handleClick}
                   to="/about-us"
                   style={{
                       backgroundColor: isAboutUsActive ? '#59B17A' : 'white',
                       color: isAboutUsActive ? 'white' : '#0047AB',
                       border: isAboutUsActive&&!stylefooter ? '4px solid white' : '1.15px solid #F1F1F1',
                   }}
            > О нас</Button>

           <Button $stylefooter={stylefooter} 
                   $isHeader={isHeader} 
                   type="button" 
                   onClick={handleClick}
                   to="/virtual-tour"
                   style={{
                       backgroundColor: isVirtualTour ? '#59B17A' : 'white',
                       color: isVirtualTour ? 'white' : '#0047AB',
                       border: isVirtualTour&&!stylefooter ? '4px solid white' : '1.15px solid #F1F1F1',
                   }}
            >Віртуальний тур</Button>

            <Button $stylefooter={stylefooter} 
                   $isHeader={isHeader} 
                   type="button" 
                   onClick={handleClick}
                   to="/schedule"
                   style={{
                       backgroundColor: isSchedule ? '#59B17A' : 'white',
                       color: isSchedule ? 'white' : '#0047AB',
                       border: isSchedule&&!stylefooter ? '4px solid white' : '1.15px solid #F1F1F1',
                   }}
            >Розклад</Button>

            <Button $stylefooter={stylefooter} 
                   $isHeader={isHeader} 
                   type="button" 
                   onClick={handleClick}
                   to="/prayer"
                   style={{
                       backgroundColor: isPrayer ? '#59B17A' : 'white',
                       color: isPrayer ? 'white' : '#0047AB',
                       border: isPrayer&&!stylefooter ? '4px solid white' : '1.15px solid #F1F1F1',
                   }}
            >Молитва</Button>

            <Button $stylefooter={stylefooter} 
                   $isHeader={isHeader} 
                   type="button" 
                   onClick={handleClick}
                   to="/donation"
                   style={{
                       backgroundColor: isDonation ? '#59B17A' : 'white',
                       color: isDonation ? 'white' : '#0047AB',
                       border: isDonation&&!stylefooter ? '4px solid white' : '1.15px solid #F1F1F1',
                   }}
            >Пожертва</Button>

           <Button $stylefooter={stylefooter} 
                   $isHeader={isHeader} 
                   type="button" 
                   onClick={handleClick}
                   to="/online-services"
                   style={{
                      backgroundColor: isOnlineServices ? '#59B17A' : 'white',
                      color: isOnlineServices ? 'white' : '#0047AB',
                      border: isOnlineServices&&!stylefooter ? '4px solid white' : '1.15px solid #F1F1F1',
                   }}
            > Онлайн послуги</Button>

            <Button $stylefooter={stylefooter} 
                   $isHeader={isHeader} 
                   type="button" 
                   onClick={handleClick}
                   to="/choir"
                   style={{
                      backgroundColor: isСhoir ? '#59B17A' : 'white',
                      color: isСhoir ? 'white' : '#0047AB',
                      border: isСhoir&&!stylefooter ? '4px solid white' : '1.15px solid #F1F1F1',
                   }}
            > Хор</Button>

            <Button $stylefooter={stylefooter} 
                   $isHeader={isHeader} 
                   type="button" 
                   onClick={handleClick}
                   to="/sunday-school"
                   style={{
                      backgroundColor: isSundaySchool ? '#59B17A' : 'white',
                      color: isSundaySchool ? 'white' : '#0047AB',
                      border: isSundaySchool&&!stylefooter ? '4px solid white' : '1.15px solid #F1F1F1',
                   }}
            >Недільня школа</Button>

            <Button $stylefooter={stylefooter} 
                   $isHeader={isHeader} 
                   type="button" 
                   onClick={handleClick}
                   to="/feedback"
                   style={{
                      backgroundColor: isFeedback ? '#59B17A' : 'white',
                      color: isFeedback ? 'white' : '#0047AB',
                      border: isFeedback&&!stylefooter ? '4px solid white' : '1.15px solid #F1F1F1',
                   }}
            >Зворотній зв'язок</Button>

        </Container>
    )
}


            /* { buttons.map(button=>(
                <li key={button.id}>

                 <Button $stylefooter={stylefooter} 
                   $isHeader={isHeader} 
                   {...{ [`$${button.active}`]: button.active }}
                  
                   type="button" 
                   onClick={handleClick}
                   to={button.path}
                   style={{
                    backgroundColor: button[button.active] ? '#59B17A' : 'white', // Если нажата — зелёный фон
                    color: button[button.active] ? 'white' : '#0047AB', // Если нажата — белый текст
                    border: button[button.active] 
                      ? '4px solid white' // Если нажата — белая граница
                      : '1.15px solid #F1F1F1', // Если не нажата — серая граница
                  }}
            > {button.title}</Button>
                </li>  
            ))
              
            } */


                // const buttons=[
    //     {
    //         id:1,
    //         title:"Головна",
    //         path:"/home",
    //         active:"isHomeActive"
    //     },
    //     {
    //         id:2,
    //         title:"О нас",
    //         path:"/about-us",
    //         active:"isAboutUsActive"
    //     },

    //     {
    //         id:3,
    //         title:"Віртуальний тур",
    //         path:"/virtual-tour",
    //         active:"isVirtualTour"
    //     },      
    //     {
    //         id:4,
    //         title:"Онлайн послуги",
    //         path:"/online-services",
    //         active:"isOnlineServices"
    //     },

    // ]
            
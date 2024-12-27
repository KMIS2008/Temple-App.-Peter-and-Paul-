import {VideoPlayer} from '../../components/VideoPlayer/VideoPlayer';
import {Tittle} from '../../components/Title/Title';
import {PhotoSlider} from '../../components/PhotoSlider/PhotoSlider';

export default function VirtualTour(){
    return(
        <>
             <Tittle title="Віртуальний тур"/>
             <VideoPlayer/>
             <Tittle title="Фотогалерея"/>
             <PhotoSlider/>
        </>
    )
}
import AdvantageItem from './AdvantageItem';
import style from './Advantages.module.css';


function Advantages() {
    const advantages = [
        { id: 1, header: 'Fast loading', text: 'Books will download and save at the same speed regardless of the quality of the Internet.', imageClass: 'item-image1' },
        { id: 2, header: 'Several eBook formats', text: 'It supports several eBook formats and direct reading from zip archives.', imageClass: 'item-image2' },
        { id: 3, header: 'Multilingual', text: 'Our team working on app localisation. In the nearest future the app will support 10 languages.', imageClass: 'item-image3' }
    ];


    return (
        <div className={style['wrapper']}>
            <h2> Get closer to advantages </h2>
            <div className={style['container']}>
                {advantages.map(el => <AdvantageItem key={el.id} id={el.id} header={el.header} text={el.text} imageClass={el.imageClass}  />)}
            </div>
        </div>
    )
}

export default Advantages;
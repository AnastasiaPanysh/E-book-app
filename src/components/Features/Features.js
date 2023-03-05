import style from './Features.module.css'
import { useState } from 'react'
import ContentItem from './ContentItem';

function Features() {
    const [content, setContent] = useState(<ContentItem label={'Internal editor'} />);
    const [background, setBackground] = useState('container-p');

    function getContent(event) {
        setContent(<ContentItem label={event.target.textContent} />)
    }
    function getBackground(){
        
        setBackground('container-p-2')
    }

    return (
        <div className={style['wrapper']}>
            <h2>Explore more features</h2>
            <div onClick={getContent} className={style['container']}>
                <p onClick={getBackground} className={style[background]}>Internal editor</p>
                <p onClick={getBackground} className={style[background]}>Compact preview</p>
                <p onClick={getBackground} className={style[background]} >Convenient search</p>
                <p onClick={getBackground} className={style[background]}>Audio version</p>
            </div>
            <div className={style['block-feature']}> {content} </div>
        </div>
    )
}

export default Features
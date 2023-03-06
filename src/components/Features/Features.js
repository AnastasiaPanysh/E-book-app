import style from './Features.module.css'
import { useState } from 'react'
import ContentItem from './ContentItem';

function Features() {
    const [content, setContent] = useState(<ContentItem label={'Internal editor'} />);
    const [flag, setFlag] = useState({ p_1: false, p_2: false, p_3: false, p_4: false, })

    function getContent(event) {
        setContent(<ContentItem label={event.target.textContent} />)
        setFlag({ p_1: false, p_2: false, p_3: false, p_4: false, [event.target.id]: true })
    }

    return (
        <div className={style['wrapper']}>
            <h2>Explore more features</h2>
            <div onClick={getContent} className={style['container']}>
                <p id='p_1' className={style[!flag.p_1 ? 'container-p' : 'container-p-2']}>Internal editor</p>
                <p id='p_2' className={style[!flag.p_2 ? 'container-p' : 'container-p-2']}>Compact preview</p>
                <p id='p_3' className={style[!flag.p_3 ? 'container-p' : 'container-p-2']} >Convenient search</p>
                <p id='p_4' className={style[!flag.p_4 ? 'container-p' : 'container-p-2']}>Audio version</p>
            </div>
            <div className={style['block-feature']}> {content} </div>
        </div>
    )
}

export default Features
import style from './Pricing.module.css'
import { useState } from 'react'



function Pricing() {
    const [swap, setSwap] = useState(false)
    const [content, setContent] = useState('$ 6.86/mo');
    const [btn, setBtn] = useState('payment-btn');


    function doSwapSwitch() {
        
        setSwap(!swap ? true : false)

        setContent('$ 8.66/mo')


    }

    return (
        <div className={style['wrapper']}>
            <h2>Honest and thoughtful pricing</h2>
            <div className={style['container']}>
                <div className={style['payment']}>
                    <h2>{content}</h2>
                    <div className={style[btn]}>$86,68 billed yearly</div>
                    <div className={style['switcher-block']}>
                        <p className={style['switcher-p']}>Pay Yearly</p>
                        <div onClick={doSwapSwitch} className={!swap ? style['swap-1'] : style['swap-2']}></div>

                        <p className={style['switcher-p']}>Monthly</p>
                    </div>
                    <p>No ads, hidden fees. Your data stays private, and we get to focus on building the best product for you.</p>
                </div>

                <div className={style['start']}>
                    <div className={style['start-text']}>
                        <p>Start a 14-days free trial right now.</p>
                        <div className={style['wrapper-btn']}>
                            <div className={style['google-play']}></div>
                            <div className={style['app-store']}></div>
                        </div>
                    </div>

                    <div className={style['image']}></div>
                </div>
            </div>
        </div>
    )
}

export default Pricing
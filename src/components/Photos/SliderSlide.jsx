import {useRef, useEffect} from 'react'


export const SliderSlide = (props) => {
    const {classes, SliderSlideDiv, el, SliderWrap, index, currentSlide, setCurrentSlide, wrapHacked, slidesLength} = props
    const showSlide = currentSlide === index

    const onHandleClick = () => {
        if (slidesLength === (index + 1)) {
            setCurrentSlide(0)
        } else {
            setCurrentSlide(currentSlide + 1)
        }
    }
    
    return (
        <div className={`${classes.slider__slide} ${showSlide ? classes.slider__slide__active : ''}`} data-slide={index} ref={SliderSlideDiv}>
            <div className={`${classes.slider__wrap} ${wrapHacked ? classes.slider__wrap__hacked : ''}`} ref={SliderWrap}>
                <div className={classes.slider__back} style={{backgroundImage: `url(${el.photo})`}}></div>
            </div>
            <div className={classes.slider__inner} style={{backgroundImage: `url(${el.photo})`}}>
                <div className={classes.slider__content}>
                    <h1>{el.text}</h1><a className={classes.go_to_next} onClick={onHandleClick}>next</a>
                </div>
            </div>
        </div>
    )
}
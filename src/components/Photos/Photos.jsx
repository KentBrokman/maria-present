import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import classes from './PhotosStyles.module.css'
import { SliderSlide } from './SliderSlide';

export const Photos = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [wrapHacked, setWrapHacked] = useState(false)
    console.log(currentSlide)
    // $(document).ready(function () {
    //     for (var i = 1; i <= $('.slider__slide').length; i++) {
    //         $('.slider__indicators').append('<div class="slider__indicator" data-slide="' + i + '"></div>')
    //     }
    //     setTimeout(function () {
    //         $('.slider__wrap').addClass('slider__wrap--hacked');
    //     }, 1000);
    // })

    // function goToSlide(number) {
    //     $('.slider__slide').removeClass('slider__slide--active');
    //     $('.slider__slide[data-slide=' + number + ']').addClass('slider__slide--active');
    // }

    // $('.slider__next, .go-to-next').on('click', function () {
    //     var currentSlide = Number($('.slider__slide--active').data('slide'));
    //     var totalSlides = $('.slider__slide').length;
    //     currentSlide++
    //     if (currentSlide > totalSlides) {
    //         currentSlide = 1;
    //     }
    //     goToSlide(currentSlide);
    // })
    const slides = [
        {
            photo: "https://i.ibb.co/2c69Q43/1.jpg",
            text: 'Этот очаровательный парень по центру с чудесной улыбкой хочет поздравить тебя с днем рождения! И пожелать тебе чудесных чудесностей.'
        },
        {
            photo: "https://i.ibb.co/g7nXBkT/2.jpg",
            text: 'Чтобы Димка смотрел на тебя так же, как на эту рыбку. P.S. Какой милашка.'
        },
        {
            photo: "https://i.ibb.co/THn7v9k/7.jpg",
            text: 'И при этом не променивал тебя на всяких Ань на школьном фото.'
        },
        {
            photo: "https://i.ibb.co/b2DdWD6/8.jpg",
            text: 'А брал пример с меня!'
        },
        {
            photo: "https://i.ibb.co/qrJwgqr/14.jpg",
            text: 'И опять с меня. P.S. Теперь я милашка.'
        },
        {
            photo: "https://i.ibb.co/1vTPszy/10.jpg",
            text: 'Желаю, даже будучи окутанной проблемами, невозмутимо смотреть в даль прекрасного будущего.'
        },
        {
            photo: "https://i.ibb.co/Vm7kjBW/15.jpg",
            text: 'Где ты - обаятельная морячка с чудесными косичками...'
        },
        {
            photo: "https://i.ibb.co/C2shJk5/5.jpg",
            text: 'Или же дама, вышедшая поутру за батонсиком белоги и решившая отправить другу свой модный причесон.'
        },
        {
            photo: "https://i.ibb.co/5hWNrPV/12.jpg",
            text: 'Каждый день освещай этот мир столь лучезарно светящейся улыбкой.'
        },
        {
            photo: "https://i.ibb.co/Snf9XnM/13.jpg",
            text: 'Даже если тебя окружают какие-то странные мужики.'
        },
        {
            photo: "https://i.ibb.co/zS6DrFj/16.jpg",
            text: 'Никогда не упускай момента посмеяться над моими кривыми ногами.'
        },
        {
            photo: "https://i.ibb.co/mTph26z/11.jpg",
            text: 'Помни, что друзья всегда подадут тебе руку помощи.'
        },
        {
            photo: "https://i.ibb.co/fGbxpfH/9.jpg",
            text: 'И оставайся всегда такой сногсшибательной красоткой.'
        },
        {
            photo: "https://i.ibb.co/TRVNhgz/17.jpg",
            text: 'Очаровательный парень закончил поздравление и крепко обнял.'
        }
    ]
    const readyFunc = () => {
        // for (let i = 0; i <= SliderSlideDiv.current.length; i++) {
        //     SilderIndicators.current.append('<div class="slider__indicator" data-slide="' + i + '"></div>')
        // }
        setTimeout(function () {
            // console.log(SliderWrap.current)
            setWrapHacked(true)
            // SliderWrap.current.classList.add('slider__wrap--hacked')
        }, 1000);
    }
    const Slider = React.useRef()
    const SliderSlideDiv = React.useRef()
    const SilderIndicators = React.useRef()
    const SliderWrap = React.useRef()
    React.useEffect(() => {
        readyFunc()
    }, [])
    return (

        <div className={classes.slider} ref={Slider}>
            {slides.map((el, index) => <SliderSlide
                key={index}
                classes={classes}
                SliderSlideDiv={SliderSlideDiv}
                el={el}
                SliderWrap={SliderWrap}
                currentSlide={currentSlide}
                setCurrentSlide={setCurrentSlide}
                wrapHacked={wrapHacked}
                slidesLength={slides.length}
                index={index}
            />)}
            {/* <div className={classes.slider__slide, classes.slider__slide__active} data-slide="1" ref={SliderSlide}>
                    <div className={classes.slider__wrap} ref={SliderWrap}>
                        <div className={classes.slider__back}></div>
                    </div>
                    <div className={classes.slider__inner}>
                        <div className={classes.slider__content}>
                            <h1>Slide <br /> One</h1><a className={classes.go_to_next}>next</a>
                        </div>
                    </div>
                </div>
                <div className={classes.slider__slide} data-slide="2">
                    <div className={classes.slider__wrap}>
                        <div className={classes.slider__back}></div>
                    </div>
                    <div className={classes.slider__inner}>
                        <div className={classes.slider__content}>
                            <h1>Slide <br /> Two</h1><a className={classes.go_to_next}>next</a>
                        </div>
                    </div>
                </div>
                <div className={classes.slider__slide} data-slide="3">
                    <div className={classes.slider__wrap}>
                        <div className={classes.slider__back}></div>
                    </div>
                    <div className={classes.slider__inner}>
                        <div className={classes.slider__content}>
                            <h1>Slide <br /> Three</h1><a className="go-to-next">next</a>
                        </div>
                    </div>
                </div> */}
            <div className={classes.slider__indicators} ref={SilderIndicators}>
                {slides.map((item, index) => {
                    return (
                        <div key={index} className={classes.slider__indicator} data-slide={index + 1}></div>
                    )
                })}
            </div>
        </div>

    )
}
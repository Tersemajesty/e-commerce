import style from "./HeroPage.module.css"

 const HeroPage = () => {
    return (
        <div className= {style.Page}>
            <div className={style.page1}>
            <img src="/perf5.jpg" alt="" />
            </div>
            <div className={style.page1}>
            <img src="/perf6.jpg" alt="" />
               </div>
            <div className={style.page1}>
            <img src="/perf7.jpg" alt="" />
            </div>
            <div className={style.page1}>
            <img src="/perf8.jpg" alt="" />
            </div>
        </div>
    )
}

export default HeroPage 
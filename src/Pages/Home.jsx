import style from "./Pages.module.css"
 const Home = () => {
    return (
        <div className={style.Home}>
             <div className={style.Bodywrap}>
                <img src="public/Blue - Mandy Stoller (8).jpeg" alt="" />
            </div>
            <div className={style.Bodywrap1}>
                <img src="public/Byredo's.jpeg" alt="" />
            </div>
            <div className={style.Bodywrap2}>
                <img src="public/Helmut Lang (1).jpeg" alt="" />
            </div>
            <div className={style.Bodywrap3}>
                <img src="public/Yara Lattafa Candy Arabic Pefume (1).jpeg" alt="" />
            </div>
            {/* <div className={ style.Bodywrap4}>
                <img src="public/perf.jpeg" alt="" />
            </div> */}

        </div>
    )
}
export default Home
import styles from './Home.module.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

 

function Home ()
{
    return(
        <>
        <Header />
        <section className={styles.container}>
            <div className={styles.apresentacao}>
                <p className={styles.para}>
                    Olá sejam bem vindos! <br />
                    <span>Mary França</span> <br />
                    Dev FrontEnd
                </p>
                <button className={styles.btn}>Saiba mais sobre mim..</button>
            </div>
            <figure>
                 <img className={styles.img} src="/undraw_love_it_xkc2.svg" alt="Imagem da Home" />
                  {/*  */}
                
            </figure>
        </section>
        <Footer />
        </>
        
    )
}
export default Home
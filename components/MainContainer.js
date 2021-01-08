import Head from 'next/head';// добавляем мета теги
import A from '../components/A.js';

const MainContainer = ({children, keywords}) => {
    return (
    <>
        <Head>
            <meta keywords={"next-test, ivan neskoromnyi" + keywords}></meta> // добавляем мета теги
            <title> Главная страница </title>
        </Head>


        <div className='navbar'>
            <A href={'/'} text="Главная"></A>
            <A href={'/users'} text="Список пользователей"></A>
        </div>

        <div>
            {children}
        </div>

        <style jsx>

    {`
        .navbar{
            background-color: gray;
            padding: 10px;
        }
    `}

</style>
    </>
    )
}

export default MainContainer;
import {useRouter} from 'next/router';
import styles from "../../styles/user.module.scss";
import MainContainer from "../../components/MainContainer";

export default function User({user}){

    const {query} = useRouter() //деструтуризация с роутера, забираем только раздел query
    console.log(user)

    return(
        <MainContainer keywords={user.name}>
        <div className={styles.user}>
            <h1>User id: {query.id}</h1>
            <div>Name user: {user.name}</div>
        </div>
        </MainContainer>
    );
};

export async function getServerSideProps({params}) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await response.json()

    return {
      props: {user}, // will be passed to the page component as props
    }
  }
  

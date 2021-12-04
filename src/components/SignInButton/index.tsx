import {FaGithub} from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import styles from './styles.module.scss';
import { signIn, signOut ,useSession } from 'next-auth/react';

export function SignInButton() {

    const {data: session, status} = useSession()

   console.log(session)

    if(session) {
        return (
            <button 
            className={styles.SignInButton}
            onClick={() => signOut()}>
                <FaGithub color="#04d361"/>
                {session.user.name}
                <FiX color="#737380" className={styles.closeIcon}/>
            </button>
        )
    } else {
        return (
            <button 
            className={styles.SignInButton}
            onClick={() => signIn('github')}>
                <FaGithub color="#eba417"/>
                Sign in with GitHub
            </button>
        )
    }

}
import Head from 'next/head'

import styles from '@/styles/Index/Index.module.css'
import { useEffect, useState } from 'react'
import { User } from '@/types';
import Avatar from '@/components/Avatar/Avatar';


export default function Home() {

  // ! Use after building the base content const [error, setError] = useState(null)

  const [IsLoading, setIsLoading] = useState(true);

  const [users, setUsers] = useState<User[] | null>(null);

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {

    try {
    
      const response = await fetch(
        `https://reqres.in/api/users?per_page=40`
      );

      if (!response.ok) {
        return;
      }
 
      const { data } = await response.json();
      
      setUsers(data);
    }
    catch(ex) {
      console.error(ex);
    }

    finally {
      // Loading spinner dissapears here
      setTimeout(() => {
        setIsLoading(false);
      }, 10500);
    }

  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Example app to show my typescript, react and API consuming knowledge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.usersContainer}>

        {
          IsLoading && <span className={styles.spinner}></span>
        }

        {
           !IsLoading && users !== null && users.map((user,index) => {
            return <Avatar key={index} first_name={user.first_name} last_name={user.last_name} image_url={user.avatar}  />
          })
        }
      </section>      
    </>
  )
}

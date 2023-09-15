import React from 'react'

import Image from 'next/image'

import styles from '@/styles/Avatar/Avatar.module.css'

type AvatarProps = {
  first_name: string;
  last_name: string;
  image_url: string;
}

const Avatar = ( {first_name, last_name, image_url: avatar}: AvatarProps ) => {
  return (
    <article className={styles.avatar}>
      <Image className={styles.image} src={avatar} width={128} height={128} alt={`${first_name} ${last_name} photo`} />
      <h3>{first_name} {last_name}</h3>
    </article>
  )
}

export default Avatar

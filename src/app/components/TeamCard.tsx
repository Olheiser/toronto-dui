import React from "react";
import Image from "next/image";
import styles from "@/styles/TeamCard.module.css";

interface TeamProps {
    imageSrc: string,
    altText: string,
    name: string,
    job: string,
    bio: string
}

const TeamCard = ({imageSrc, altText, name, job, bio}: TeamProps) => {
    return (
        <article className={styles.cardContainer}>
            <Image 
                src={imageSrc}
                alt={altText}
                width={100}
                height={200}
                className={styles.teamPhoto}
            />  
            <section>
                <h2 className={styles.name}>{name}</h2>
                <h3 className={styles.jobTitle}>{job}</h3>
                <p>{bio}</p>
            </section>
        </article>
    )
}

export default TeamCard;
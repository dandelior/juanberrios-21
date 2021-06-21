import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/parts/WorksGrid.module.sass'

export default function WorksGrid(props) {

    const works = props.works;
    // console.log(works);

    return (
        <>
            <section className={styles.worksGridWrapper}>
                {props.children ? (
                    <div className={styles.heading}>
                        {props.children}
                    </div>
                ) : ''}
                <div className={styles.worksGrid}>

                    {works.map((work, i) => (
                        <Link as={`/works/${work.slug}`} href="/works/[slug]" key={i}>
                            <a className={styles.workCard}>
                                <div className={styles.img}>
                                    <Image
                                        // className={styles.img}
                                        src={work.coverImage}
                                        alt="Este soy yo"
                                        layout="fill"
                                        objectFit="cover"
                                        objectPosition="center"
                                    />
                                </div>
                                <div className={styles.data}>
                                    <h3>{work.title}</h3>
                                    <p>{work.excerpt}</p>
                                </div>
                            </a>
                        </Link>
                    ))}

                </div>
            </section>
        </>
    )
}
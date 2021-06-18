import Link from 'next/link'
import styles from '../styles/parts/WorksGrid.module.sass'

export default function WorksGrid({items}, props) {

    // console.log(items);

    return (
        <>
            <section className={styles.worksGridWrapper}>
                {props.children ? (
                    <div className={styles.heading}>
                        {props.children}
                    </div>
                ) : ''}
                <div className={styles.worksGrid}>

                    {items.map((work) => (
                        <>
                            <Link as={`/works/${work.slug}`} href="/works/[slug]">
                                <a className={styles.workCard}>
                                    <div className={styles.img}></div>
                                    <div className={styles.data}>
                                        <h3>{work.title}</h3>
                                        <p>Sistema de gestión para centros deportivos</p>
                                    </div>
                                </a>
                            </Link>
                        </>
                    ))}

                </div>
            </section>
        </>
    )
}
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import styles from '../styles/Layout.module.css'
import utilStyles from '../styles/utils.module.css'

export default function Layout({children,title,description,home}) {
    return (
        <div className={styles.container}>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <nav>
                <h1>Hola</h1>
            </nav>
            <header className={styles.header}>
                {home ? (
                <>
                    <Image
                    priority
                    src="/images/profile.jpg"
                    className={utilStyles.borderCircle}
                    height={144}
                    width={144}
                    alt={name}
                    />
                    <h1 className={utilStyles.heading2Xl}>{name}</h1>
                </>
                ) : (
                <>
                    <Link href="/">
                    <a>
                        <Image
                        priority
                        src="/images/profile.jpg"
                        className={utilStyles.borderCircle}
                        height={108}
                        width={108}
                        alt={name}
                        />
                    </a>
                    </Link>
                    <h2 className={utilStyles.headingLg}>
                    <Link href="/">
                        <a className={utilStyles.colorInherit}>{name}</a>
                    </Link>
                    </h2>
                </>
                )}
            </header>
            <main> 
                {children}
            </main>
    
            <footer>
                <h2>Footer</h2>
            </footer>
        </div>
    )
}


Layout.defaultProps = {
    title : 'Next.js',
    description: 'Descripcion del sitio'
}
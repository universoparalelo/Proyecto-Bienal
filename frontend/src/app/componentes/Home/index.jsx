import ImageBar from "./ImageBar";
import InfoExtra from "./InfoExtra";
import Hero from "./Hero";
import styles from "./page.module.css";


export default function Home() {
    return (
        <>
        <Hero />

        <nav className={styles.rootSeccionNavegacion}>
            <ImageBar />
        </nav>

        <InfoExtra />
        </>
    )
}
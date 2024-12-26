import ImagenesRedireccion from "../ImagenesRedireccion";
import esculturas from "../../../../../public/Art.jpg";   
import escult from "../../../../../public/Escultor.jpg";
import evento from "../../../../../public/Event.jpg";
import styles from "../page.module.css";


export default function ImageBar() {
  return (
    <>
      <div className={styles.gridImages}>
        <div className={styles.rootNavContenedor}>
          <ImagenesRedireccion
            titulo="Esculturas"
            imagen={esculturas}
            enlace="/esculturas"
          />
        </div>
        <div className={styles.rootNavContenedor}>
          <ImagenesRedireccion
            titulo="Escultores"
            imagen={escult}
            enlace="/escultores"
          />
        </div>
        <div className={styles.rootNavContenedor}>
          <ImagenesRedireccion
            titulo="Eventos"
            imagen={evento}
            enlace="/eventos"
          />
        </div>
      </div>
    </>
  );
}

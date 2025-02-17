import Escultor from "../componentes/Escultor";
import BotonVolver from "../componentes/BotonVolver";
import { getEscultores } from "../lib/getElementos";
import styles from "./page.module.css";
import { Pagination } from "../componentes/Pagination";

const PAGE_SIZE = 6;

export default async function EscultoresPage({ searchParams }) {
  const { page } = searchParams;
  const { escultores, meta } = await getEscultores(PAGE_SIZE, page);

  return (
    <>
      <BotonVolver retorno="/" />
      <section className={styles.escultoresSect}>
        <h1 className={styles.escultoresHeader}> Escultores Participantes </h1>
        <p className={styles.escultoresText}>
          De todas partes del mundo, escultores se congregan para competir con
          sus obras
        </p>
      </section>
      <div className={styles.escultoresPortada}>
        {escultores.map((escultor) => (
          <Escultor
            nombre={escultor.nombre + " " + escultor.apellidos}
            foto={escultor.imagen}
            bandera={escultor.bandera}
            enlace={`escultores/${escultor.documentId}`}
            key={escultor.documentId}
          />
        ))}
      </div>
      <Pagination
        page={meta.page}
        pageSize={meta.pageSize}
        pageCount={meta.pageCount}
        total={meta.total}
      ></Pagination>
    </>
  );
}

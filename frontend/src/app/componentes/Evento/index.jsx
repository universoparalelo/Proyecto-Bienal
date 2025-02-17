import Link from "next/link";
import styles from "./plantillaEvento.module.css";
import pin_drop from "../../../../public/pin_drop.svg";
import Image from "next/image";

function formatearFecha(fecha) {
  const meses = [
      'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
      'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
  ];
  const [año, mes, día] = fecha.split('-');
  return `${día} de ${meses[parseInt(mes, 10) - 1]}`;
}

export default function Evento({
  nombre,
  lugar,
  fecha,
  hora_inicio,
  hora_fin,
  fecha_finalizacion,
  descripcion,
  foto,
  tematica,
  esculturas,
}) {
  const fecha_formateada = formatearFecha(fecha);
  
  return (
    <>
    <div className={styles.eventContainer}>
      <div><h2 className={styles.eventoNombre}>{nombre}</h2></div>
      <div>

        <div className={styles.estilosEspecificaciones}>
            <p className={styles.eventoParrafo}>
              {descripcion}
            </p>
            <p className={styles.eventoParrafo}>
              Desde el {fecha_formateada} - {hora_inicio.substring(0,5)}hs
            </p>
            {fecha_finalizacion ? (
              <p className={styles.eventoParrafo}>
                Hasta el {formatearFecha(fecha_finalizacion)}
              </p>
              ): ''
            }
            <p className={styles.eventoParrafo}>
              <Image src={pin_drop}></Image>{lugar}
            </p>
            {tematica ? (
              <p className={styles.eventoParrafo}>
                <strong>Temática:</strong> {tematica}
              </p>
              ): ''
            }
        </div>

        <div className={styles.evento}>
          <img className={styles.eventoImagen} src={foto} alt={nombre} />
        </div>

      </div>

        
          <div className={styles.relacionado}>
          {esculturas && esculturas.length > 0 ? (
            <>
              <h3 className={styles.eventoEsculTitulo}>Esculturas relacionadas</h3>
              <ul className={styles.eventoListas}>
                {esculturas.map((escultura) => (
                  <li className={styles.eventoElementoLista} key={escultura.documentId}>
                    <img
                      className={styles.eventoImagenLista}
                      src={escultura.imagen}
                      alt={escultura.nombre}
                    />
                    <p className={styles.eventoParrafoLista}>{escultura.nombre}</p>
                    <Link
                      className={styles.eventoLinkLista}
                      href={`/votaciones/${escultura.documentId}`}
                    >
                      Ir a votar
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            ""
          )}

          </div>
    </div>
      </>
  );
}

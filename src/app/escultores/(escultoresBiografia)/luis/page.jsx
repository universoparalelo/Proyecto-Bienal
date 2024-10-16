import Luis from "/public/Escultores/LuisBernardi.png";
import Arg from "/public/Banderas/ar.svg";
import simpleza from "/public/GaleriaEsculturas/Despues_Simpleza.jpg";
import PlantillaEscultoresPage from "../../../ui/GalleryComponents/plantillaEscultores";

export default function LuisPage() {
  return (
    <>
      <PlantillaEscultoresPage
        foto={Luis}
        bandera={Arg}
        nombre="Luis Bernardi"
        pais="Argentina"
        parrafo="Nacido el 23 de septiembre de 1965 en la ciudad de Monte Caseros,Corrientes. Actualmente reside en la ciudad de Unquillo, provincia de Córdoba."
        distinciones={[
          "2021. Primer Premio del 65° Salón de Artes Plásticas “Manuel Belgrano”. Ciudad Autónoma de Buenos Aires (Argentina).",

          "2017. Primer Premio del Concurso Provincial de Escultura de VillaMaría, Córdoba. (Argentina).",

          " 2015. Mención del 104° Salón Nacional de Artes Visuales -SecciónEsculturas- Ciudad Autónoma de Buenos Aires (Argentina).",

          "2002. Mención Especial del Jurado en el XIX Salón Provincial -sección escultura- de Artistas Plásticos Asociados de Córdoba(Argentina).",

          "2000. Mención del Jurado y Premio del Público en el 9° Encuentro Nacional de Escultura en Madera de Leandro N. Alem, Misiones (Argentina).",
        ]}
        proyNombre="Simpleza"
        proyImagen={simpleza}
        proyEnlace="/esculturas/simpleza"
      />
    </>
  );
}

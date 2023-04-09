//
// Capacidad de corriente de conductores de cobre a una temperatura de 30°C
// y área de la sección transversal con/sin forro tipo THHW
//
//     AWG/kcmil   |   Amperaje    |  Área del   |  Área total con
//                 |     [A]       |  conductor  |  forro [mm^2]
//                 |               |   [mm^2]    |
const medidas_conductores = [
    {calibre: "14",  corriente: 15,  areaC: 2.08,  areaT: 9.0792},
    {calibre: "12",  corriente: 20,  areaC: 3.31,  areaT: 11.9459},
    {calibre: "10",  corriente: 30,  areaC: 5.26,  areaT: 15.9043},
    {calibre: "8",   corriente: 40,  areaC: 8.37,  areaT: 27.3397},
    {calibre: "6",   corriente: 55,  areaC: 13.3,  areaT: 46.5663},
    {calibre: "4",   corriente: 70,  areaC: 21.2,  areaT: 60.8212},
    {calibre: "2",   corriente: 95,  areaC: 33.6,  areaT: 83.3229},
    {calibre: "1/0", corriente: 125, areaC: 53.5,  areaT: 138.9291},
    {calibre: "2/0", corriente: 145, areaC: 67.4,  areaT: 162.8602},
    {calibre: "3/0", corriente: 165, areaC: 85.0,  areaT: 193.5928},
    {calibre: "4/0", corriente: 195, areaC: 107.0, areaT: 232.3522},
    {calibre: "250", corriente: 215, areaC: 127.0, areaT: 283.5287},
    {calibre: "300", corriente: 240, areaC: 152.0, areaT: 324.9315},
    {calibre: "350", corriente: 260, areaC: 177.3, areaT: 366.4354},
    {calibre: "400", corriente: 280, areaC: 202.7, areaT: 406.8501},
    {calibre: "500", corriente: 320, areaC: 253.4, areaT: 485.3915},
    {calibre: "600", corriente: 355, areaC: 304.0, areaT: 597.4181},
    {calibre: "750", corriente: 400, areaC: 380.0, areaT: 714.8921},
    {calibre: "1000", corriente: 455, areaC: 506.7, areaT: 896.7394}
];


//
// Dimensiones de tubo conduit
//
//    designación      |    tamaño     |  diámetro int.  |  diámetro int.
//        mm           |   comercial   |  p. delgada[mm] |  p. gruesa [mm]
const dimensiones_conduit = [
    {designacion: "16",  tamaño: "1/2",   dint_pd: 15.80,  dint_pg: 17.35},
    {designacion: "21",  tamaño: "3/4",   dint_pd: 20.93,  dint_pg: 22.35},
    {designacion: "27",  tamaño: "1",     dint_pd: 26.62,  dint_pg: 27.94},
    {designacion: "35",  tamaño: "1 1/4", dint_pd: 35.03,  dint_pg: 36.68},
    {designacion: "41",  tamaño: "1 1/2", dint_pd: 40.87,  dint_pg: 42.60},
    {designacion: "53",  tamaño: "2",     dint_pd: 52.48,  dint_pg: 54.31},
    {designacion: "64",  tamaño: "2 1/2", dint_pd: 69.37,  dint_pg: 66.18},
    {designacion: "76",  tamaño: "3",     dint_pd: 85.22,  dint_pg: 82.04},
    {designacion: "102", tamaño: "4",     dint_pd: 110.06, dint_pg: 107.14}
];

window.onload = function () {
    //
    // Llena el cuerpo de la tabla de conductores con los valores
    // del arreglo 'medidas_conductores'
    //
    let tCuerpo = document.getElementById("tBody-conductores")

    for (let i = 0; i < medidas_conductores.length; i++)
    {
        let fila = document.createElement("tr")

        let obj = medidas_conductores[i]
        for (let j in obj)
        {
            let celda = document.createElement("td")
            let texto = document.createTextNode(obj[j])
            celda.appendChild(texto)
            fila.appendChild(celda)
        }

        tCuerpo.appendChild(fila)
    }
    
    //
    // Llena el cuerpo de la tabla de tubo conduit con los valores
    // del arreglo 'dimensiones_conduit'
    //
    tCuerpo = document.getElementById("tBody-tubo-conduit")

    for (let i = 0; i < dimensiones_conduit.length; i++)
    {
        let fila = document.createElement("tr")

        let obj = dimensiones_conduit[i]
        for (let j in obj)
        {
            let celda = document.createElement("td")
            let texto = document.createTextNode(obj[j])
            celda.appendChild(texto)
            fila.appendChild(celda)
        }

        tCuerpo.appendChild(fila)
    }
}

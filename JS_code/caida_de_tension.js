let form_caida = document.getElementById("caida-form");
form_caida.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = Object.fromEntries(
        new FormData(e.target)
    )
    
    calc_conductor(data);
})


function calc_conductor(data) {
    let {n_fases, v_linea, distancia, corriente, resistividad, caida, tolerancia} = data;

    let constante;
    switch (Number(n_fases)) {
        case 1:
        case 2:
            constante = 2;
            break;
        case 3:
            constante = 1.732;
            break;
    }
    
    let corriente_total = (Number(corriente) * (100 + Number(tolerancia))) / 100;
    document.getElementById("corrienteT").value = corriente_total;

    let area_conductor = (constante * 100 * resistividad * distancia * corriente_total) / (caida * v_linea);
    document.getElementById("area_conductor").value = area_conductor;

    let conductor = medidas_conductores.find(cable => (cable.areaC * 1.05) >= area_conductor);
    document.getElementById("calibre_conductor").value = conductor.calibre;
}


function cambioFases() {
    let radios = document.getElementsByName("n_fases");
    let select = document.getElementById("volt_linea");

    for (let i in radios)
    {
        if (radios[i].checked)
        { // Encontró el radio seleccionado
            if (radios[i].value == "1")
            {
                select.options[0].disabled = false;
                select.options[1].disabled = true;
                select.options[2].disabled = true;
                select.value = "127";
            }
            else if (radios[i].value == "2" || radios[i].value == "3")
            {
                select.options[0].disabled = true;
                select.options[1].disabled = false;
                select.options[2].disabled = false;
                select.value = "220";
            }
        }
    }
}


var preguntas = [{
    pregunta: "La compañía LACR es un inversionista extranjero, con sede en Panamá, la cual nos ofrece realizar una transacción en efectivo con el fin de comprar acciones de la compañía, e indican que realizaran la compra por el doble del valor que cuestan las acciones, que nos aconsejas que debemos hacer?",
    respuestauno: ["respuestauno",
                       "Rechazar la oferta  y Realizar un reporte operación sospechosa ante la UIAF",
                       true],
    respuestados: ["respuestados",
                       "Acceder a la oferta",
                       false],
    respuestatres: ["respuestatres",
                        "solicitar una nueva cita con el inversionista para verificar el monto de acciones a adquirir",
                        false]





},
                {
                    pregunta: " La oficina de Envigado, ofrece comprar el 30% de las acciones de la compañía y ofrece invertir el 10% en planta automotor que nos aconsejas que debemos hacer?",
                    respuestauno: ["respuestauno",
                                       "Rechazar la oferta y denunciar a la fiscalía",
                                       true],
                    respuestados: ["respuestados",
                                        "Ofrecer invertir en una de las compañías aliadas",
                                        false],
                    respuestatres: ["respuestatres",
                                        "solicitar una nueva cita con el gerente de la oficina de envigado para establecer los acuerdos comerciales",
                                        false]

                },
                {
                    pregunta: "De las siguientes opciones cual es la acertada para definir el significado de lavado de activos:",
                    respuestauno: ["respuestauno",
                                       "Procedimiento mediante el cual una persona busca encubrir dineros captados del público en forma irregular.",
                                       false],
                    respuestados: ["respuestados",
                                       "Procedimiento mediante el cual organizaciones criminales buscan dar apariencia de legalidad a los recursos generados de sus actividades ilícitas.",
                                       true],
                    respuestatres: ["respuestatres",
                                        "Procedimiento mediante el cual una persona busca encubrir dineros captados del público en forma irregular",
                                        false]

                },
                {
                    pregunta: "La efectiva implementación de SIPLAFT le permite a Servientrega",
                    respuestauno: ["respuestauno",
                                       "Proteja sus activos para asegurar el cumplimiento de su misión y objetivos estratégicos",
                                       true],
                    respuestados: ["respuestados",
                                       "Ejercer un control previo selectivo en las actividades financieras de sus procesos internos.",
                                       false],
                    respuestatres: ["respuestatres",
                                       "Mantener excelentes relaciones con los gobiernos internacionales",
                                       false]

                },
                {
                    pregunta: "Cuál de las siguientes opciones no es un objetivo del SIPLAFT para la organización Servientrega",
                    respuestauno: ["respuestauno",
                                       "Asegurar que Servientrega, no tenga vinculación alguna en actividades de Lavados de activos.",
                                       false],
                    respuestados: ["respuestados",
                                       "Mitigar el ingreso de personal desmovilizado de grupos armados ilegales",
                                       true],
                    respuestatres: ["respuestatres",
                                        "Asegurar que Servientrega, no tenga vinculación alguna en actividades de financiación al terrorismo.",
                                        false]

                },
                {
                    pregunta: "Diga cuál de los siguientes es un mecanismo de prevención establecido por Servientrega para el lavados de activos y financiación del terrorismo",
                    respuestauno: ["respuestauno",
                                     "Conocimiento de los proveedores del negocio.",
                                      false],
                    respuestados: ["respuestados",
                                     "Conocimiento de los contratistas del negocio.",
                                     false],
                    respuestatres: ["respuestatres",
                                     "Conocimiento de los asociados al negocio",
                                   true]



                },
                {
                    pregunta: "En caso de que usted como colaborador de Servientrega tenga conocimiento de una posible operación intentada, inusual o sospechosa por parte de otro colaborador de la organización, que debe hacer:",
                    respuestauno: ["respuestauno",
                                  "Reporte Informativo al jefe directo",
                                  false],
                    respuestados: ["respuestados",
                                   "Reporte Interno",
                                   true],
                    respuestatres: ["respuestatres",
                                   "Reporte al proceso",
                                   false]



                },
                {
                    pregunta: "En caso de que usted como colaborador de Servientrega tenga conocimiento de conductas como el lavado de activos o financiación al terrorismo y no coloque en conocimiento a la autoridad competente, incurre en el delito de:",
                    respuestauno: ["respuestauno",
                                  "Omisión de información",
                                  false],
                    respuestados: ["respuestados",
                                   "Omisión de denuncia",
                                   true],
                    respuestatres: ["respuestatres",
                                   "Corrupción privada.",
                                   false]

                },
                {
                    pregunta: "Qué es la Financiación del Terrorismo?",
                    respuestauno: ["respuestauno",
                                  " Es el apoyo financiero, de cualquier forma, al terrorismo o a aquéllos que lo fomentan, planifican o están implicados en el mismo.",
                                  true],
                    respuestados: ["respuestados",
                                   "Es el apoyo financiero, de cualquier forma, a la delincuencia común o a aquéllos que la fomentan, planifican o están implicados en el mismo.",
                                   false],
                    respuestatres: ["respuestatres",
                                   "Es el apoyo financiero, de cualquier forma, a la delincuencia común o a aquéllos que la fomentan, planifican o están implicados en el mismo.",
                                   false]

                },
                {
                    pregunta: "¿Cómo se mide el riesgo de LA/FT?",
                    respuestauno: ["respuestauno",
                                  " Nivel e intensidad de la amenaza que el LA/FT representa para un país.",
                                  false],
                    respuestados: ["respuestados",
                                   "La vulnerabilidad del país en términos del nivel de fortaleza y capacidad de sus instituciones y sectores económicos de protegerse de la amenaza.",
                                   false],
                    respuestatres: ["respuestatres",
                                   "El riesgo es proporcional al nivel de amenaza y de vulnerabilidad del país",
                                   true]

                },

];



var seleccionres,
    conteo1=0,
    conteo2=0;

$("a").click(function (evento) {
    if ($(this).attr('id') === "pregunta") {
       if (preguntas.length === 0) {
          
          
          window.location.assign("./index.html#Over")
          window.location.reload(); 
          } else { 
        
          var random;

          random = Math.floor((Math.random() * preguntas.length) + 0);

        /*alert(preguntas[random]); 
        console.log(preguntas[random])*/
        $("#pregunta1").text(preguntas[random].pregunta);
        $("#respuestauno").text(preguntas[random].respuestauno[1]);
        $("#respuestados").text(preguntas[random].respuestados[1]);
        $("#respuestatres").text(preguntas[random].respuestatres[1]);
        seleccionres = preguntas[random];
        console.log(preguntas.length)
        preguntas.splice(random,1)
        console.log(preguntas.length)

        window.location.assign("./index.html#Pista")
        console.log(conteo1,"conteo1");
        
        if (conteo1 === 4) {
            conteo2++;
            console.log(conteo2,"conteo2")
            conteo1=0        

        switch (conteo2) {
            case 1:
                  window.location.assign("./index.html#Pista1")
                  
                break;

            case 2:
                window.location.assign("./index.html#Pista2")

                break;

            case 3:
                window.location.assign("./index.html#Pista3")
                break;

            case 4:
                window.location.assign("./index.html#Pista4")
                break;    
        }    } };

    } else

        switch ($(this).attr('id')) {
            case 'respuestauno':
                console.log(seleccionres.respuestauno[2]);
                if (seleccionres.respuestauno[2]) {
                    console.log("sep");
                    document.getElementById("respuestauno").href = "#popupSI"
                    conteo1++
                } else {
                    console.log("nop")
                    document.getElementById("respuestauno").href = "#popupNO"
                }
                break;

            case 'respuestados':
                if (seleccionres.respuestados[2]) {
                    console.log("sep");
                    document.getElementById("respuestados").href = "#popupSI"
                    conteo1++
                } else {
                    console.log("nop")
                    document.getElementById("respuestados").href = "#popupNO"
                }
                break;

            case 'respuestatres':
                if (seleccionres.respuestatres[2]) {
                    console.log("sep");
                    document.getElementById("respuestatres").href = "#popupSI"
                    conteo1++
                } else {
                    console.log("nop")
                    document.getElementById("respuestatres").href = "#popupNO"
                }
                break;

        }

});

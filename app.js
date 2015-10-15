        var preguntas = [{pregunta : "La compañía LACR es un inversionista extranjero, con sede en Panamá, la cual nos ofrece realizar una transacción en efectivo con el fin de comprar acciones de la compañía, e indican que realizaran la compra por el doble del valor que cuestan las acciones, que nos aconsejas que debemos hacer?" , 
                          respuestauno :   [ "respuesta1",
                                             "Rechazar la oferta  y Realizar un reporte operación sospechosa ante la UIAF",
                                             true],
                          respuestados :   [ "respuesta2",
                                             "Acceder a la oferta",
                                             false],
                          respuestatres :   [ "respuesta3",
                                              "solicitar una nueva cita con el inversionista para verificar el monto de acciones a adquirir",
                                              false]                                         

                                                                       



                        },
                        {pregunta : " La oficina de Envigado, ofrece comprar el 30% de las acciones de la compañía y ofrece invertir el 10% en planta automotor que nos aconsejas que debemos hacer?" , 
                        respuestauno :   [ "respuesta1",
                                           "Rechazar la oferta y denunciar a la fiscalía",
                                           true],
                        respuestados :   [ "respuesta1",
                                            "Ofrecer invertir en una de las compañías aliadas",
                                            false],
                        respuestatres :   [ "respuesta",
                                            "solicitar una nueva cita con el gerente de la oficina de envigado para establecer los acuerdos comerciales",
                                            false]       

                        },
                        {pregunta : "De las siguientes opciones cual es la acertada para definir el significado de lavado de activos:" ,
                         respuestauno :   [ "respuesta1",
                                            "Procedimiento mediante el cual una persona busca encubrir dineros captados del público en forma irregular.",
                                            false],
                         respuestados :   [ "respuesta1",
                                            "Procedimiento mediante el cual organizaciones criminales buscan dar apariencia de legalidad a los recursos generados de sus actividades ilícitas.",
                                            true],
                         respuestatres :   [ "respuestay",
                                             "Procedimiento mediante el cual una persona busca encubrir dineros captados del público en forma irregular",
                                             false]       

                        },
                        {pregunta : "La efectiva implementación de SIPLAFT le permite a Servientrega" ,
                         respuestauno :   [ "respuesta1",
                                            "Proteja sus activos para asegurar el cumplimiento de su misión y objetivos estratégicos",
                                            true],
                         respuestados :   [ "respuesta1",
                                            "Ejercer un control previo selectivo en las actividades financieras de sus procesos internos.",
                                            false],
                         respuestatres :   [ "respuestay",
                                            "Mantener excelentes relaciones con los gobiernos internacionales",
                                            false]       

                        },
                        {pregunta : "Cuál de las siguientes opciones no es un objetivo del SIPLAFT para la organización Servientrega" ,
                         respuestauno :   [ "respuesta1",
                                            "Asegurar que Servientrega, no tenga vinculación alguna en actividades de Lavados de activos.",
                                            false],
                         respuestados :   [ "respuesta1",
                                            "Mitigar el ingreso de personal desmovilizado de grupos armados ilegales",
                                            true],
                         respuestatres :   [ "respuestay",
                                             "Asegurar que Servientrega, no tenga vinculación alguna en actividades de financiación al terrorismo.",
                                             false]       

                        },
                        {pregunta : "Diga cuál de los siguientes es un mecanismo de prevención establecido por Servientrega para el lavados de activos y financiación del terrorismo" ,
                         respuestauno :  ["respuesta1",
                                          "Conocimiento de los proveedores del negocio.",
                                           false],
                         respuestados :  ["respuesta1",
                                          "Conocimiento de los contratistas del negocio.",
                                          false],
                         respuestatres : ["respuesta1",
                                          "Conocimiento de los asociados al negocio",
                                        true]           

                                              

                        },
                        {pregunta : "En caso de que usted como colaborador de Servientrega tenga conocimiento de una posible operación intentada, inusual o sospechosa por parte de otro colaborador de la organización, que debe hacer:" , 
                         respuestauno :  ["respuesta1",
                                       "Reporte Informativo al jefe directo",
                                       false],
                         respuestados :  ["respuesta1",
                                        "Reporte Interno",
                                        true],
                         respuestatres : ["respuesta1",
                                        "Reporte al proceso",
                                        false]           

                                                                      

                        },
                        {pregunta : "En caso de que usted como colaborador de Servientrega tenga conocimiento de conductas como el lavado de activos o financiación al terrorismo y no coloque en conocimiento a la autoridad competente, incurre en el delito de:" , 
                         respuestauno :  ["respuesta1",
                                       "Omisión de información",
                                       false],
                         respuestados :  ["respuesta1",
                                        "Omisión de denuncia",
                                        true],
                         respuestatres : ["respuesta1",
                                        "Corrupción privada.",
                                        false]       

                        },                        
                        {pregunta : "Qué es la Financiación del Terrorismo?" , 
                         respuestauno :  ["respuesta1",
                                       " Es el apoyo financiero, de cualquier forma, al terrorismo o a aquéllos que lo fomentan, planifican o están implicados en el mismo.",
                                       true],
                         respuestados :  ["respuesta2",
                                        "Es el apoyo financiero, de cualquier forma, a la delincuencia común o a aquéllos que la fomentan, planifican o están implicados en el mismo.",
                                        false],
                         respuestatres : ["respuesta1",
                                        "Es el apoyo financiero, de cualquier forma, a la delincuencia común o a aquéllos que la fomentan, planifican o están implicados en el mismo.",
                                        false]       

                        },
                        {pregunta : "¿Cómo se mide el riesgo de LA/FT?" , 
                         respuestauno :  ["respuesta1",
                                       " Nivel e intensidad de la amenaza que el LA/FT representa para un país.",
                                       false],
                         respuestados :  ["respuesta2",
                                        "La vulnerabilidad del país en términos del nivel de fortaleza y capacidad de sus instituciones y sectores económicos de protegerse de la amenaza.",
                                        false],
                         respuestatres : ["respuesta1",
                                        "El riesgo es proporcional al nivel de amenaza y de vulnerabilidad del país",
                                        true]        

                        },

                        ];
 
                        console.log(preguntas[0].respuestatres[0])
        var seleccionres,
            conteo1,
            conteo2;

        $("a").click(function(evento){
            if ($(this).attr('id') === "pregunta") {
            var random;
            
           random = Math.floor((Math.random() * preguntas.length) + 0); 
                            
           /*alert(preguntas[random]); 
           console.log(preguntas[random])*/
           $( "#pregunta1" ).text(preguntas[random].pregunta); 
           $( "#respuesta1" ).text(preguntas[random].respuestauno[1]); 
           $( "#respuesta2" ).text(preguntas[random].respuestados[1]); 
           $( "#respuesta3" ).text(preguntas[random].respuestatres[1]); 
           seleccionres = preguntas[random];

           } else 
           
            $(seleccionres).each(function(index, data){
                
                console.log(data)
            })
           
        });


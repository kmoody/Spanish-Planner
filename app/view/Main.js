Ext.define("GS.view.Main", {
    extend: 'Ext.tab.Panel',
    requires: [
        'Ext.TitleBar',
        'Ext.Video',
        'Ext.dataview.List',
        'Ext.data.Store',
        'Ext.Button',
        'Ext.Viewport',
        'Ext.Container',
        'Ext.form.Panel',
        'Ext.field.Email',
        'GS.view.Button',
        //'GS.view.Register',
        'Ext.field.Password'       
    ],
    config: {
        tabBarPosition: 'top',

        items: [
            {
            
             style: {"background": "#1468A2"},
             
                title: 'Español Clases',
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: true,

                items: [{
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Español Clases'
                    
                    ,style: {
                    	"font-size": "95%"
                  }
                },{
                	xtype: 'component',

					html: [
						 
                                                      "<h1>El Sueño de Bob </h1>",
"<p>Había un avión que se llama Bob.  Bob viajaba mucho por todo el mundo.  El viajaba con su amigo Juan.  Juan era el piloto de Bob.  Ellos se divertían.  Una vez, ellos volaron a Francia.  Necesitaron sus pasaportes.  Fue una ocasión especial.  Normalmente, Bob tuvo que quedar al aeropuerto mientras Bob vió la ciudad.  Esta vez, Bob y Juan se fueron juntos para divertirse.  Cuando llegaron a Paris, ellos tuvieron hambre.  Ellos fueron a un restaurante para comer.  Comieron pescado y ensalada.  Depués, fueron para ver la Torre de Eiffel.  Toda la gente francés llevaba gorros extraños. Ellos fueron al hotel.  En el hotel, ellos se vieron a algunos pasajeros del avión.  Ellos fueron a su habitación y se acostaron porque estuvieron muy cansados.</p>",  
"<p>El próximo día, ellos fueron al río y vieron los barcos.  Bob le gustaba mucho a los barcos.  Bob preguntó a Juan si un avión puede hacerse un barco.  Juan dijo que no es posible para un avion hacerse un barco.  Bob pensó mucho en esta pregunta.  Quería hacerse un barco.  Barcos pueden nadar. “¿Por qué un avion no puede hacerse un barco,?” Bob preguntó a Juan.  “Porque los pasajeros quieren estar en el cielo, no en el agua cuando volan en el avión.”  Bob y Juan tuvieron que ir al aeropuerto para regresar a los Estados Unidos.  Bob supo que quiere ser un barco.</p>",
"<p>Cuando regresaron a los Estados Unidos, Bob pensaba mucho en como hacerse un barco.  Un viernes por la tarde, Bob no tuvo pasajeros.  Voló y voló hasta que un día no tuvo combustible. Bob estaba en el agua, finalmente se que siempre quiso ser. EL FINAL</p>"
					].join("")
					,style: {
						"font-size": "90%",
                        "color": "white"
					}
                }]        
            },
            {
                title: 'Español Uno Ayuda',
                iconCls: 'action',
                layout: 'fit',

                items: [
                    {
                        
                        
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Español Uno'
                        
                    
                        },{
                        xtype: 'dataview',
   						 useComponents: true,
    					defaultType: 'mylistitem',
    					
                        style: {"background": "#1468A2"},
                        
                        data: [
                               { title: 'Español Dos Imperfecto' },
                               { title: 'Español Dos Future ' },
                               { title: 'Español Dos Preterite' },
                               { title: 'Español Dos Presente' }
                            
                               ]
                        }
                ]
            },
            { 
                title: 'Espanõl Dos',
                iconCls: 'action',
                
                items: [
                   { 
                       docked: 'top',
                       xtype: 'titlebar',
                       title: 'Espanõl Dos'
                
                    }
                ]
                
            },{
                title: 'Register',
                layout: 'fit',
                items: [{ 
				   docked: 'top',
				   xtype: 'titlebar',
				   title: 'Register'
			
				},{
                    
            		xtype: 'formpanel',
            		items: [
						{
							xtype: 'emailfield',
							label: 'Email',
							name: 'email'
						},
						{
							xtype: 'passwordfield',
							label: 'Password',
							name: 'password'
						}
					]
            	}]
            }
        ]
    }
});

# ConsultaPE 

## Descripcion
* Este proyecto no usa ningun OCR,por lo cual es mas eficiente al momento de obtener informacion
* Depende del estado de la pagina web de SUNAT y JNE ,se devolvera un error asi que depende del caso de uso se tendra que pensar en alguna otra solucion de contingencia

# API Consulta Ruc y Dni - Perú

## API COSULTA DNI
Ejecutar usando Curl.
```
curl -H "Accept: application/json" http://localhost:3000/api/dni/46658592
```
Respuesta:
```
{ 
	dni: '46658592',
	nombres: 'LESLY LICET',
	apellidoPaterno: 'PEREZ',
	apellidoMaterno: 'PEÑA',
	codVerifica: ''
}
```
## API COSULTA RUC
Ejecutar usando Curl.
```
curl -H "Accept: application/json" http://localhost:3000/api/ruc/20131312955
```
Respuesta:
```
{ 
	ruc: '20131312955',
	razonSocial: 'SUPERINTENDENCIA NACIONAL DE ADUANAS Y DE ADMINISTRACION TRIBUTARIA',
	nombreComercial: '-',
	tipo: 'INSTITUCIONES PUBLICAS',
	estado: 'ACTIVO',
	condicion: 'HABIDO',
	direccion: 'AV. GARCILASO DE LA VEGA NRO. 1472',
	departamento: 'LIMA',
	provincia: 'LIMA',
	distrito: 'LIMA',
	fechaInscripcion: '04/05/1993',
	sistEmsion: 'MANUAL/COMPUTARIZADO',
	sistContabilidad: 'COMPUTARIZADO',
	actExterior: 'SIN ACTIVIDAD',
	actEconomicas: [ '75113 - ACTIV. ADMINIST. PUBLICA EN GENERAL' ],
	cpPago: [ 
			  'FACTURA',
		      'BOLETA DE VENTA',
			  'NOTA DE CREDITO',
			  'NOTA DE DEBITO',
			  'GUIA DE REMISION - REMITENTE',
			  'COMPROBANTE DE RETENCION',
			  'POLIZA DE ADJUDICACION POR REMATE DE BIENES' 
			],
	sistElectronica:[ 
						'FACTURA PORTAL DESDE 07/08/2013',
						'BOLETA PORTAL DESDE 01/04/2016' 
					],
	fechaEmisorFe: '07/08/2013',
	cpeElectronico: [ 
					'FACTURA (desde 07/08/2013)', 
					'BOLETA (desde 01/04/2016)' 
					],
	fechaPle: '01/01/2013',
	padrones:[ 
			'Incorporado al Régimen de Agentes de Retención de IGV (R.S.037-2002) a partir del 01/06/2002'
		 	] 
}
```
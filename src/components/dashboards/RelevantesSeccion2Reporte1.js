import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Titulo from './Titulo/Titulo';
import Form from 'react-bootstrap/Form';
import ColorMap from './Graficas/ColorMap';
import Calendar from './Graficas/Nivo/Calendar';
import XYChart from './Graficas/XYChart';
import Tabla from './Graficas/Tabla';

function RelevantesSeccion2Reporte1() {
    const tablaHeader1 = ["Error 1","RFC no coincide con lo estipulado en el DOF"];
    const tablaContenido1 = ["Error 2", "No existe el campo nombre y este es obligatorio pues se trata de una persona física"];
    const tablaHeader2 = ["Archivo","Periodo de la operación","Numero del registro","Número de cuenta","Nombre / Denominación","RFC"];
    const tablaContenido2 = ["Relevante", "201901","MT-103-1","787873882","Pedro Sanchez Vitral","SAVI9012233V7"];
    return (
        <>
            <Titulo texto="Reporte 5: Análisis de personas físicas y morales en reporte de operaciones relevantes" />
            <Container fluid={true}>
                <Row>
                    <Col>
                        <Form.Group style={{ width: '100%' }}>
                            <Form.Control as="select" size="lg" custom>
                                <option>Seleccionar si es una persona física o moral</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group style={{ width: '100%' }}>
                            <Form.Control as="select" size="lg" custom>
                                <option>Seleccionar periodo</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h4><span class="lnr lnr-chevron-right"></span> Geolocalización de los registros reportados</h4>
                        <hr />
                        <ColorMap />
                    </Col>
                    <Col>
                        <Form.Group style={{ width: '100%' }}>
                            <h4><span class="lnr lnr-chevron-right"></span> Fechas en las que se reporto a la persona</h4>
                            <Form.Control as="select" size="lg" custom>
                                <option>Seleccionar periodo</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Form.Control>
                        </Form.Group>
                        <div style={{height: '350px'}}>
                            <Calendar />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h4><span class="lnr lnr-chevron-right"></span> Operaciones relevantes de la persona moral / física </h4>
                        <hr />
                        <XYChart />
                    </Col>
                    <Col>
                        <h4><span class="lnr lnr-chevron-right"></span> Errores presentes en los registros de la persona seleccionada</h4>
                        <hr />
                        <Tabla
                            tablaHeader={[...tablaHeader1]}
                            contenido={tablaContenido1}
                        />
                        <hr />
                        <h4><span class="lnr lnr-chevron-right"></span> Información en los registros de la persona seleccionada</h4>
                        <hr />
                        <Tabla
                            tablaHeader={[...tablaHeader2]}
                            contenido={tablaContenido2}
                        />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default RelevantesSeccion2Reporte1;
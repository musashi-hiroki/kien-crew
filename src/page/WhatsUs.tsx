import { Col, Container, Row } from "react-bootstrap";

export default function WhatsUp(){
    return(
        <Container fluid className="text-center fade-in">
            <Row>
                <Col>
                <div style={{fontSize:"5rem"}}>what`s us</div>
                </Col>
            </Row>
            <Row>
                <Col>
                <iframe width="100%" height="400px" src="https://www.youtube.com/embed/omDYvsI_ZZs?si=GJc5FXojeZPEuuSH&autoplay=1&mute=1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className="mt-3" style={{fontSize:"2rem"}}>
                        2021年5月、<br/>原宿に突如出現した、戦路的、頭脳派，体育会系，暴飲暴食，自由参加型ダンス大好きクラブ。
                    </p>
                    <p className="mt-3" style={{fontSize:"2rem"}}>
                        様々なレペゼンをもつ個性豊かなメンバーによる個性豊かなショーケースによって、<br/>
                        見る人を感動させ、時に大爆笑させている。
                    </p>
                </Col>
            </Row>


        </Container>
    )
}
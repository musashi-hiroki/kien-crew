import { useState } from "react";
import { Col, Container, Modal, Row } from "react-bootstrap";

type profile = {
    name: string
    birthDate: string
    from: string
    image: string
    career: string[]
}

type Props = {
    hideTitle?: boolean
}
export default function Profile(props: Props){
    const [modal, setModal] = useState<JSX.Element>(<></>)
    const ryoga: profile = {
        name: "Ryoga",
        birthDate: "1999.1.19",
        from: "神奈川",
        image: "/src/assets/ryoga.jpg",
        career: ["VIBE DANCE COMPETITION XXI 優勝",
            "紅白歌合戦『群青-YOASOBI』出演",
            "紅白歌合戦『Good Luck!! - SixTONES』出演",
            "Nissy 『Trippin』 MV出演",
            "DREAMS COME TRUE 『DREAMS COME TRUE WONDERLAND 2023』 全都市 OA & 本編出演",
            "GROP CM 『GROP 舞踏会編』出演",
            "SixTONES 『Losy』『共鳴』『Good Luck!!』『Party People』振付アシスタント",
            "TXT 『MOA Diary』 振付アシスタント"
        ]
    }
    // const member = ["yuka","san","masayoshi","ryoga"]
    // useEffect(() => {
    //     fetch(`${window.location.hostname}/assets/profile.json`).then(response => {
    //         response.json().then((body: profile[]) => {
    //             for(let i = 0;i < member.length;i++){
    //                 body
    //             }
    //         })
    //     })
    // },[])
    // function getProfiles(): profile[]{
    //     fetch(`${window.location.hostname}/assets/profile.json`).then(response => {
    //         response.json().then(body => {
    //             const b: profile[] = body
    //             return b
    //         })
    //     })
    // }
    function openModal(prof: profile){
        const careerElements: JSX.Element[] = []
        for(let i = 0;i < prof.career.length; i++){
            careerElements.push(
                <li key={i}>{prof.career[i]}</li>
            )
        }
        setModal(
            <Modal show onHide={handleClose} style={{color: "#000"}}>
                <Modal.Header closeButton style={{fontSize:"2rem"}}>
                    {prof.name}
                </Modal.Header>
                <Modal.Body>
                    <div className="text-center">
                        <img src={prof.image} width="60%" height="100%"></img>
                        <div className="ml-1">
                            <p>生年月日：{prof.birthDate}</p>
                            <p>出身地：{prof.from}</p>
                            <p>【経歴】</p>
                            <ul>{careerElements}</ul>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        )
    }
    function handleClose(){
        setModal(<></>)
    }
    return (
        <>
            <Container fluid className="mt-2 fade-in">
                <Row style={{display: props.hideTitle ? "none" : ""}}>
                    <Col>
                        <div style={{fontSize:"5rem"}}>profile</div>
                    </Col>
                </Row>
                <Row className="mt-1">
                    <Col className="col-4">
                        <div onClick={() => {openModal(ryoga)}}>
                            <img src="/src/assets/ryoga.jpg" style={{width:"100%"}}></img>
                            <p style={{fontSize: "2rem",color:"#fff"}}>Ryoga</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            {modal}
        </>
    )
}
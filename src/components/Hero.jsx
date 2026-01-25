import {useEffect, useRef} from "react";


const Hero = () => {
    const videoRef = useRef();

    useEffect(() => {
        if (videoRef.current) videoRef.current.playbackRate = 2;
    }, []);

    return (
        <section id="hero">
            <div>
                <h1>Reveal Agency</h1>
                <img src="/title.png" alt=""/>
            </div>

            <video ref={videoRef} src="/videos/hero.mp4" autoPlay muted playsInline />

            <button>Empezar</button>
            <p>Empieza a trabajar con nosotros</p>


        </section>
    )
}
export default Hero

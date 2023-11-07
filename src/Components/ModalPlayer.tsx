import { useState, useRef, useEffect } from "react";
import styles from "../styles/Modal.module.css";

type ModalPlayerProps = {
    videoKey: string;
};

const ModalPlayer = ({ videoKey }: ModalPlayerProps) => {
    const [showModal, setShowModal] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                setShowModal(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [modalRef]);

const mostrarVideo = () => {
    setShowModal(!showModal);

}
    return (
        <div>
            <button onClick={() => mostrarVideo()}>Abrir modal</button>
            {showModal && (
                <div className={styles.modal}>
                    <div ref={modalRef} className={styles.modalContent}>
                        <button onClick={() => setShowModal(false)}>Fechar modal</button>
                        <div className={styles.videoPlayer}>
                            <iframe
                                width="560"
                                height="315"
                                src={`https://www.youtube.com/embed/${videoKey}`}
                                title="Trailer"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ModalPlayer;

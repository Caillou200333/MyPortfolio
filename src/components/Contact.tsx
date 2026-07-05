import {
    section,
    container,
    sectionTitle,
    list,
    itemList,
    link
} from "@/styles/styles";

export default function Contact() {
    return (
    <section id="contact" className={`${section} ${container}`}>

        <h2 className={sectionTitle}>Contact</h2>

        <div className={list}>

            <div className={itemList}>
                <span>Email</span>
                <a href="mailto:pierrerochereau33@gmail.com" className={link}>
                    pierrerochereau33@gmail.com
                </a>
            </div>

            <div className={itemList}>
                <span>GitHub</span>
                <a href="https://github.com/Caillou200333" className={link}>
                    github.com/Caillou200333
                </a>
            </div>
            
            {/*
            <div className={itemList}>
                <span>LinkedIn</span>
                <a href="https://linkedin.com/in/tonprofil" className={link}>
                    linkedin.com/in/tonprofil
                </a>
            </div>

            <div className={itemList}>
                <span>CV</span>
                <a href="/cv.pdf" className={link} target="_blank">
                    Download PDF
                </a>
            </div>
            */}
        </div>
    </section>
    );
}
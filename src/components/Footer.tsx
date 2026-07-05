import {footer} from "@/styles/styles";

export default function Footer() {
    return (
    <footer className={footer}>
        © {new Date().getFullYear()} ROCHEREAU Pierre — Portfolio
    </footer>
    );
}
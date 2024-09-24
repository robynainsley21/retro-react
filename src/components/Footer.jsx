export default function Footer() {
    const currentDate = () => new Date().getFullYear();
    return (
        <footer className="footer">
            <p>Robyn Carnow &copy; <span>{currentDate()}</span></p>
        </footer>
    );
}
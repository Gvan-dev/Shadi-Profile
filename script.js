document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.Main > div');
    let currentSection = 0;

    const scrollToSection = (index) => {
        if (index >= 0 && index < sections.length) {
            sections[index].scrollIntoView({ behavior: 'smooth' });
            currentSection = index;
        }
    };

    let isScrolling = false;

    document.addEventListener('wheel', (event) => {
        if (isScrolling) return;

        isScrolling = true;
        setTimeout(() => (isScrolling = false), 700); // Prevent rapid scrolling

        if (event.deltaY > 0) {
            // Scroll down
            scrollToSection(currentSection + 1);
        } else if (event.deltaY < 0) {
            // Scroll up
            scrollToSection(currentSection - 1);
        }
    });
});

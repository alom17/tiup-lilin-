let isFlameOn = true;

function toggleFlame() {
    const innerFlame = document.querySelector('.inner-flame');
    const outerFlame = document.querySelector('.outer-flame');
    const duration = 2000; // Durasi animasi (ms)

    if (isFlameOn) {
        outerFlame.style.transition = `opacity ${duration}ms ease-out`;
        innerFlame.style.transition = `opacity ${duration}ms ease-out`;
        outerFlame.style.opacity = '0';
        innerFlame.style.opacity = '0';
        isFlameOn = false;
    } else {
        outerFlame.style.transition = `opacity ${duration}ms ease-in`;
        innerFlame.style.transition = `opacity ${duration}ms ease-in`;
        outerFlame.style.opacity = '1';
        innerFlame.style.opacity = '1';
        isFlameOn = true;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Toggling flame when the screen is tapped
    document.body.addEventListener('click', () => {
        toggleFlame();
    });
});

document.addEventListener("DOMContentLoaded", function () {
  const bannerElements = document.querySelectorAll('.banner-element');
    const titleSwarmContainer = document.getElementById('titleSwarm');

    bannerElements.forEach(bannerElement => {
        bannerElement.addEventListener('mouseenter', () => {
            createTitleSwarm();
        });

        bannerElement.addEventListener('mouseleave', () => {
            setTimeout(() => {clearTitleSwarm()}, 200);
        });
    });

  function createTitleSwarm(event) {
      const mainTitle = document.querySelector('.title');
      const mainTitleRect = mainTitle.getBoundingClientRect();
      const startHeight = mainTitleRect.bottom - 20; // Adjust start height

      const numTitles = 10; // Adjust number of titles
      const titleHeight = 40; // Adjust title height
      const lineSpacing = 5; // Adjust line spacing
      const delay = 40;

      for (let i = 0; i < numTitles; i++) {
        setTimeout(() => {
          const title = document.createElement('h1');
          title.textContent = 'Massimo Bourquin';
          title.classList.add('title-swarm');
          title.style.top = `${startHeight + (i * (titleHeight + lineSpacing))}px`;
          title.style.left = '40px'; // Align 40px from left
          title.style.opacity = 0.5 - (i * 0.05);;
          titleSwarmContainer.appendChild(title);

          const line = document.createElement('div');
          line.classList.add('line');
          line.style.top = `${startHeight + (i * (titleHeight + lineSpacing)) + (titleHeight / 2)}px`;
          line.style.left = '0'; // Align with the left edge of the container
          line.style.width = `${mainTitleRect.width}px`;
          titleSwarmContainer.appendChild(line);
        }, i * delay);
  }} 

  function clearTitleSwarm() {
    const swarmTitles = document.querySelectorAll(".title-swarm");
    let delay = 0; // Initial delay

    swarmTitles.forEach((title, index) => {
        setTimeout(() => {
            title.remove();
            if (index === swarmTitles.length - 1) {
                setTimeout(() => {
                    const remainingTitles = document.querySelectorAll(".title-swarm");
                    remainingTitles.forEach((remainingTitle) => {
                        remainingTitle.remove();
                    });
                }, 1000); // Adjust the delay as needed
            }
        }, delay);
        delay += 100; // Increment delay for next iteration
    });
}
});




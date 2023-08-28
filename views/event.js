document.addEventListener('DOMContentLoaded', () => {
    const audioPlayer = document.getElementById('audio-player');
    const albumCover = document.getElementById('album-cover-image');
    const songTitle = document.querySelector('.song-title');
    const itemContainers = document.querySelectorAll('.item-container');

    itemContainers.forEach((container, index) => {
        const item = container.querySelector('.item');

        item.addEventListener('click', async function () {
            const clickedItem = this.textContent.trim();
            const newItemPath = `/assets/musics/${clickedItem}.mp3`;
            audioPlayer.src = newItemPath;
            albumCover.src = `/assets/imgs/${clickedItem}.webp`;
            songTitle.textContent = `Musica ${clickedItem}`;
        });
    });
});
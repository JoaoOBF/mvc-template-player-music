document.addEventListener('DOMContentLoaded', () => {
    const audioPlayer = document.getElementById('audio-player');
    const albumCover = document.getElementById('album-cover-image');
    const songTitle = document.querySelector('.song-title');
    const itemContainers = document.querySelectorAll('.item-container');

    itemContainers.forEach((container, index) => {
        console.log(container)
        const item = container.querySelector('.item');

        item.addEventListener('click', async function () {
            const clickedItem = this.textContent.trim();
            const itemNameWithoutExtension = clickedItem.split('.').slice(0, -1).join('.');
            const newItemPath = `/assets/musics/${clickedItem}`;
            audioPlayer.src = newItemPath;
            albumCover.src = `/assets/imgs/${itemNameWithoutExtension}.webp`;
            songTitle.textContent = `Musica ${itemNameWithoutExtension}`;
        });
    });
});
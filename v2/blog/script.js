const words = document.querySelector('.post-content')
                      .innerText
                      .split(/\s+/).length;

const minutes = Math.max(1, Math.ceil(words / 225));

document.getElementById('reading-time').textContent =
    `${minutes} min read`;
const addPhoto = document.getElementById('addPhoto'),
      downloadImg = document.querySelector('.download__img');


addPhoto.addEventListener('change', (e) => {
    if(e.target.files.length > 0) {
    let src = URL.createObjectURL(e.target.files[0]);
    downloadImg.src = src;
    addPhoto.parentElement.classList.add('d-none');
    downloadImg.parentElement.classList.remove('d-none');
      downloadImg.nextElementSibling.textContent = e.target.files[0].name
    }
    });
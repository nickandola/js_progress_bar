console.log("i am index js")
const upload = () => {
  let progressBar = document.querySelector('.progress-bar');
  // return progressBar.setAttribute('id', 'play-animation');
  return progressBar.classList.toggle("play-animation")
};

const btnHandle = document.querySelector('.btn')
btnHandle.addEventListener('click', upload);

const copyBtn = document.querySelector('.url-output-button')

copyBtn.addEventListener('click', (event) => {
  const urlText = document.querySelector('.url-output-text').value
  navigator.clipboard
    .writeText(urlText)
    .then(() => alert(`${urlText} has been written to clipboard`))
})

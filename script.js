const dropZone = document.querySelector('#dropZone')
const fileInput = document.querySelector('#file')

dropZone.addEventListener('click', () => fileInput.click())
dropZone.addEventListener('dragover', (e) => {
  e.preventDefault(); // Prevent default behavior (open file in browser)
  dropZone.classList.add('drag-over')
})
dropZone.addEventListener('dragleave', () => {
  dropZone.classList.remove('drag-over')
})

dropZone.addEventListener('drop', (e) => {
  e.preventDefault()
  dropZone.classList.remove('drag-over')

  if (e.dataTransfer.files.length > 0) {
    fileInput.files = e.dataTransfer.files
    updatePreview()
  }
})

 // Handle file selection through the input field
 fileInput.addEventListener("change", updatePreview);

 function updatePreview () {
  const file = fileInput.files[0]
  const reader = new FileReader()

  reader.onload = () => {
    dropZone.innerHTML = `
    <img src="${reader.result}" class="avatar-img">
    <button class="file-btn">Remove image</button>
    <button class="file-btn">Change image</button>
    `
  }
  reader.readAsDataURL(file)
  
 }
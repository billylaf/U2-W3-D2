const KEY = "memory"

const save = function () {
  const textarea = document.getElementById("notepad-content")
  const notepadValue = textarea.value
  localStorage.setItem(KEY, notepadValue)
}
const load = function () {
  const previousContent = localStorage.getItem(KEY)

  if (previousContent) {
    const textarea = document.getElementById("notepad-content")
    textarea.value = previousContent
    document.getElementById("output").innerText = previousContent
  } else {
    alert("non esiste un contenuto precedentemente salvato!")
  }
}

const reset = function () {
  const textarea = document.getElementById("notepad-content")
  textarea.value = ""
  localStorage.removeItem(KEY)
}

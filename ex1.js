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

/* metodo per incerementare secondi alla pagina senza resettarla alla fine della sessiona */
/* const timer = document.getElementById("timer");
let count = parseInt(sessionStorage.getItem("timer")) || 0;
timer.textContent = count;
setInterval(() => {
  count++;
  sessionStorage.setItem("timer", count);
  timer.textContent = count;
}, 1000); */

function Vocab() {
    
    
    //https://stackoverflow.com/questions/50401390/promises-fetch-in-javascript-how-to-extract-text-from-text-file
    fetch('vocabulary-list.txt')
  .then(response => response.text())
  .then((data) => {

    const lines = data.split('\n');
    
    const listElement = document.getElementById('vocab-list');





    //https://stackoverflow.com/questions/54429643/javascript-bold-string-before-specific-char
                lines.forEach(line => {
                const [word, description] = line.split(':');
                if (word && description) {
                    const li = document.createElement('li');
                    li.innerHTML = `<strong>${word.trim()}:</strong> ${description.trim()}`;
                    listElement.appendChild(li);
                }
            });
        })
  }
Vocab(); //Call function
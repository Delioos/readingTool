// function that take the text from the text area and split it into words
function getText() {
    var text = document.getElementById("text").value
    var banWords = document.getElementById("banWords").value.split(' ')
    var words = text.split(" ")
    words = words.filter(elem => (banWords.includes(elem) == false)).map(elem => elem.toLowerCase()).map(elem => elem.replace(/[^a-zA-Z]/g, "")).filter(elem => elem != "")
    topOccurence(words)
}

function topOccurence(words) {
    let count = {}
    words.forEach(word => {
        if (count[word]) {
            count[word]++
        } else {
            count[word] = 1
        }
    } )
    let sorted = Object.keys(count).sort((a,b) => count[b] - count[a])
    
    for(let i = 1; i <= 10; i++) {
        
        var beginning = ''
        i < 10 ? beginning =  i + '  :' : beginning = i + ':'
        var line = ( " "+ sorted[i-1]  + " ")
        var nb = ''
        i < 10 ? nb = ' ' + count[sorted[i-1]] : nb = count[sorted[i-1]]

        document.getElementById("app").innerHTML += beginning + nb + line  + "<br>"
    }
}
function script() {
console.log(getText());
}
fetch("https://acb-api.algoritmika.org/api/transaction?from=John%20Smith")
.then(res => res.json())
.then(data => {
    data.map(a => {
        let info;
        info = a.from + " " + a.to + "-ye " + a.amount + " dollar ödəniş köçürdü";
        console.log(info)
        const paragraph = document.createElement('p');
        paragraph.textContent = info;
        document.body.appendChild(paragraph);
    })
})
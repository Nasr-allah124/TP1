const reponses = {
  lang: ["le clavier", "la souris", "le scanner"],
  per: ["html", "Css", "js"],
  sym: ["windows", "Linux", "macOS"],
  cpm: ["Rabat"],
  cpf: ["Paris"],
};

function initQCM() {
  document.getElementById("qcmform").reset();
}

function comparerTableaux(tab1, tab2) {
  if(tab1.length !== tab2.length) return false;
  let t1 = tab1.slice().sort();
  let t2 = tab2.slice().sort();
  for(let i = 0; i < t1.length; i++) {
      if(t1[i] !== t2[i]) return false;
  }
  return true;
}

function afficherResultat(){
  let score = 0;
  let fen = window.open("", "", "width=400,height=400");
  fen.document.writeln("<h2>Résultats du QCM :</h2><br>");

  let reponses1 = [];
  let elems1 = document.querySelectorAll('input[name="lang"]:checked');
  for (let i = 0; i < elems1.length; i++) {
      reponses1.push(elems1[i].value);
  }
  if(comparerTableaux(reponses.lang, reponses1))
     {fen.document.writeln("Question 1 correcte <br>"); score++; } 
  else 
    fen.document.writeln("Question 1 incorrecte <br>");

  let reponses2 = [];
  let elems2 = document.querySelectorAll('input[name="per"]:checked');
  for (let i = 0; i < elems2.length; i++) {
      reponses2.push(elems2[i].value);
  }
  if(comparerTableaux(reponses.per, reponses2))
    { fen.document.writeln("Question 2 correcte <br>"); score++; } 
  else 
    fen.document.writeln("Question 2 incorrecte <br>");

  let reponses3 = [];
  let elems3 = document.querySelectorAll('input[name="sym"]:checked');
  for (let i = 0; i < elems3.length; i++) {
      reponses3.push(elems3[i].value);
  }
  if(comparerTableaux(reponses.sym, reponses3))
    { fen.document.writeln("Question 3 correcte <br>"); score++; } 
  else 
    fen.document.writeln("Question 3 incorrecte <br>");

  let q4 = document.querySelector('input[name="cpm"]:checked');
  if(q4 && q4.value === reponses.cpm[0])
    { fen.document.writeln("Question 4 correcte <br>"); score++; } 
  else 
    fen.document.writeln("Question 4 incorrecte <br>");

  let q5 = document.querySelector('input[name="cpf"]:checked');
  if(q5 && q5.value === reponses.cpf[0])
    { fen.document.writeln("Question 5 correcte <br>"); score++; } 
  else 
    fen.document.writeln("Question 5 incorrecte <br>");

  fen.document.writeln("<br>Score total : " + score + "/5");
}

function afficherCorrige() {
  let corrigeWin = window.open("", "", "width=400,height=400");
  corrigeWin.document.writeln("<h2>Corrigé du QCM</h2>");
  corrigeWin.document.writeln(`
    <p><b>1.</b> <span style="color:green; text-decoration:underline;">le clavier, la souris, le scanner</span></p>
    <p><b>2.</b> <span style="color:green; text-decoration:underline;">HTML, CSS, JavaScript</span></p>
    <p><b>3.</b> <span style="color:green; text-decoration:underline;">Windows, Linux, macOS</span></p>
    <p><b>4.</b> <span style="color:green; text-decoration:underline;">Rabat</span></p>
    <p><b>5.</b> <span style="color:green; text-decoration:underline;">Paris</span></p>
  `);
  
}

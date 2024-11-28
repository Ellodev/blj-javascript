// Wichtig: die result Variable ausserhalb von parseNode() deklarieren, 
// sonst wird sie bei rekursivem Aufruf überschrieben (d.h. neu deklariert)  
let result = "";

function parseNode(startNode) {
    
    for (let i = 0; i < startNode.childNodes.length; i++) {
   
        let nd =  startNode.childNodes[i];
       
        result += "<tr>"; 
        // TODO: die Variable result weiter mit den den gewünschten Daten befüllen
        result += "<td>" + nd.nodeType + "</td>";
        result += "<td>" + nd.nodeName + "</td>";
        result += "<td>" + nd.nodeValue + "</td>";
        result += "<td>" + nd.textContent + "</td>";
        result += "</tr>"; 

        // nächsten Node parsen durch rekursiven Aufruf dieser Funktion
        parseNode(nd);
    }

    return "<table><tr><th>nodeType</th><th>nodeName</th><th>nodeValue</th><th>textContent</th></tr>" + result + "</table>";
}
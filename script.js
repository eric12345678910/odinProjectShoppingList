
document.getElementById('add').onclick = function() {
    let node = document.createElement('li')
    let item = document.getElementById('input').value;
    let itemNode = document.createTextNode(item);

    node.appendChild(itemNode);

    document.getElementById('li').appendChild(node);
    document.getElementById('input').value = "";

    console.log(node)
    }
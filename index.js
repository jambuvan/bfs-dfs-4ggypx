// Import stylesheets
import './style.css';

// DFS Flatten the DOM to generate Tect
function looper(node) {
  if(!node) {
    return [];
  }
  if(node && node.nodeType === Node.TEXT_NODE) {
    return [node.textContent];
  }

  var children = node.childNodes; console.log(children);
  var res = [];
  for(var child in children) { 
    var childRes = looper(children[child]);
    res = res.concat(childRes);
  }
  console.log(res);
  return res;
}

 looper(document.querySelector('#app'));


// BFS
function bfs(node) {
  if(!node) {
    return;
  }

  var queue = [];
  queue.push(node);

  while(queue.length > 0) {
    var cNode = queue.shift();
    if(!Array.isArray(cNode)) {
      console.log(cNode);
      continue;
    }

    cNode.forEach((aNode)=> {
      queue.push(aNode);
    });
  }
}
//console.log(bfs([1,[4, [5, [6]]], 2,3]));
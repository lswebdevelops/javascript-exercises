let linkedList2 = {
  value: ['John', 46],
  next: {
    value: ['Karl', 34],
        next: null
    
  }
};

// Create the new  node
let karenNode = {
  value: ['Karen', 14],
  next: null
};
let susanNode = {
  value: ['Susan', 20],
  next: null
};


// Update the next pointer of the  node
linkedList2.next.next = susanNode;
linkedList2.next.next.next = karenNode;

// Update the next pointer of the  node
susanNode.next = linkedList2.next.next.next;
karenNode.next = linkedList2.next.next.next.next;


console.log(linkedList2);

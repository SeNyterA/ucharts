
const users = [
  { id: 1, name: 'User 1', email: 'user1@example.com', phone: '123-456-7890', address: 'Address 1' },
  { id: 2, name: 'User 2', email: 'user2@example.com', phone: '123-456-7890', address: 'Address 2' },
];

const tableBody = document.querySelector('#userTable tbody');

// users.forEach(user => {
//   const row = document.createElement('tr');
//   Object.entries(user).forEach(([key, value]) => {
//     const cell = document.createElement('td');
//     if (key === 'email') {
//       const mailtoLink = document.createElement('a');
//       mailtoLink.href = `mailto:${value}`;
//       mailtoLink.textContent = value;
//       cell.appendChild(mailtoLink);
//     } else if (key === 'phone') {
//       const telLink = document.createElement('a');
//       telLink.href = `tel:${value}`;
//       telLink.textContent = value;
//       cell.appendChild(telLink);
//     } else {
//       cell.textContent = value;
//     }
//     row.appendChild(cell);
//   });

//   tableBody.appendChild(row);
// });



// function highlightText(node, regex) {
//   if (node.nodeType === Node.TEXT_NODE) {
//     if (node.textContent.match(regex)) {
//       const newElement = document.createElement('span');
//       newElement.innerHTML = node.textContent.replace(regex, '<mark>$&</mark>');
//       node.parentNode.replaceChild(newElement, node);
//     }
//   } else {
//     node.childNodes.forEach((child) => highlightText(child, regex));
//   }
// }

// const searchInput = document.querySelector('#searchInput');
// searchInput.addEventListener('input', (event) => {
//   const searchTerm = event.target.value;
//   const regex = new RegExp(searchTerm, 'gi');
//   document.querySelectorAll('#userTable-113 td').forEach((cell) => {
//     cell.innerHTML = cell.innerHTML.replace(/<mark>(.*?)<\/mark>/g, '$1');
//     cell.innerHTML = cell.innerHTML.replace(/<span>(.*?)<\/span>/g, '$1');
//   });
//   if (!searchTerm) {
//     return;
//   }
//   document.querySelectorAll('#userTable-113 td').forEach((cell) => {
//     highlightText(cell, regex);
//   });
// });


function highlightText(node, regex) {
  if (node.nodeType === Node.TEXT_NODE) {
    if (node.textContent.match(regex)) {
      const newElement = document.createElement('span');
      newElement.innerHTML = node.textContent.replace(regex, '<mark>$&</mark>');
      node.parentNode.replaceChild(newElement, node);
    }
  } else {
    node.childNodes.forEach((child) => highlightText(child, regex));
  }
}

const searchInput = document.querySelector('#input-91');
searchInput.addEventListener('input', (event) => {
  try {
    const searchTerm = event.target.value;
    const regex = new RegExp(searchTerm, 'gi');
    console.log(document.querySelectorAll('#userTable-113 td'))
    document.querySelectorAll('#userTable-113 td')?.forEach((cell) => {
      cell.innerHTML = cell.innerHTML.replace(/<mark>(.*?)<\/mark>/g, '$1');
      cell.innerHTML = cell.innerHTML.replace(/<span>(.*?)<\/span>/g, '$1');
    });
    if (!searchTerm) {
      return;
    }
    document.querySelectorAll('#userTable-113 td')?.forEach((cell) => {
      highlightText(cell, regex);
    });
  } catch (error) {
    console.log(JSON.stringify(error))
  }
});

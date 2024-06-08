
const users = [
  { id: 1, name: 'User 1', email: 'user1@example.com', phone: '123-456-7890', address: 'Address 1' },
  { id: 2, name: 'User 2', email: 'user2@example.com', phone: '123-456-7890', address: 'Address 2' },
];

const tableBody = document.querySelector('#userTable tbody');

users.forEach(user => {
  const row = document.createElement('tr');
  Object.entries(user).forEach(([key, value]) => {
    const cell = document.createElement('td');
    if (key === 'email') {
      const mailtoLink = document.createElement('a');
      mailtoLink.href = `mailto:${value}`;
      mailtoLink.textContent = value;
      cell.appendChild(mailtoLink);
    } else if (key === 'phone') {
      const telLink = document.createElement('a');
      telLink.href = `tel:${value}`;
      telLink.textContent = value;
      cell.appendChild(telLink);
    } else {
      cell.textContent = value;
    }
    row.appendChild(cell);
  });

  tableBody.appendChild(row);
});

const searchInput = document.querySelector('#searchInput');

searchInput.addEventListener('input', (event) => {
  const searchTerm = event.target.value;
  const regex = new RegExp(searchTerm, 'gi');
  document.querySelectorAll('#userTable td').forEach((cell) => {
    cell.innerHTML = cell.textContent;
    if (!searchTerm) {
      return;
    }
    cell.innerHTML = cell.textContent.replace(regex, (match) => `<mark>${match}</mark>`);
  });
});
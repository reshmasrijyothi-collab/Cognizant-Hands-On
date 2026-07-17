import React from 'react';

// A React element created using React.createElement() to display the page heading
const heading = React.createElement('h1', null, 'Office Space Rental Listings');

// An object representing a single office space, with its Name, Rent and Address
const office = {
  name: 'Skyline Business Center',
  rent: 75000,
  address: '4th Floor, MG Road, Bengaluru',
  image: 'https://via.placeholder.com/200x120?text=Office+Space',
};

// A list of office space objects, used to loop through and display more data
const officeList = [
  { name: 'Skyline Business Center', rent: 75000, address: 'MG Road, Bengaluru' },
  { name: 'Riverside Workspace', rent: 45000, address: 'Banjara Hills, Hyderabad' },
  { name: 'Urban Hub Offices', rent: 58000, address: 'Andheri East, Mumbai' },
  { name: 'GreenPark Suites', rent: 32000, address: 'Salt Lake, Kolkata' },
];

function App() {
  return (
    <div>
      {heading}

      {/* Attribute usage: image of the office space */}
      <img src={office.image} alt={office.name} />

      {/* Displaying a single office object's details */}
      <div>
        <h2>{office.name}</h2>
        <p>Address: {office.address}</p>
        <p style={{ color: office.rent < 60000 ? 'red' : 'green' }}>
          Rent: &#8377;{office.rent}
        </p>
      </div>

      {/* Looping through the list of office objects */}
      <h2>All Available Office Spaces</h2>
      <ul>
        {officeList.map((item, index) => (
          <li key={index}>
            <strong>{item.name}</strong> — {item.address} —{' '}
            <span style={{ color: item.rent < 60000 ? 'red' : 'green' }}>
              &#8377;{item.rent}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

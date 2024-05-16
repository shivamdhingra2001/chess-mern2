
import MiniDrawer from "../Home/Minidrawer";
import React from 'react';

function Tournaments() {
  // Mock data for tournaments
  const tournaments = [
    { id: 1, name: 'Tournament 1', date: '2024-05-20', location: 'City 1' },
    { id: 2, name: 'Tournament 2', date: '2024-06-10', location: 'City 2' },
    { id: 3, name: 'Tournament 3', date: '2024-07-05', location: 'City 3' },
    // Add more tournaments as needed
  ];

  return (
    <div className='bg-background w-full h-full flex flex-row'>
      <MiniDrawer />
      <div className="flex flex-col items-start justify-start w-full px-20 py-28 gap-4">
        <h1 className="text-3xl font-semibold">Tournaments</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tournaments.map(tournament => (
            <div key={tournament.id} className="border border-gray-200 rounded-lg p-4">
              <h2 className="text-lg font-semibold">{tournament.name}</h2>
              <p><strong>Date:</strong> {tournament.date}</p>
              <p><strong>Location:</strong> {tournament.location}</p>
              {/* Add more details as needed */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tournaments;

import React, { useState } from 'react';

const PetApp = () => {
  const [pets, setPets] = useState([]);
  const [appointments, setAppointments] = useState([]);
  
  const [petName, setPetName] = useState('');
  const [petSpecies, setPetSpecies] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');

  const handlePetSubmit = (e) => {
    e.preventDefault();
    const newPet = { name: petName, species: petSpecies };
    setPets([...pets, newPet]);
    setPetName('');
    setPetSpecies('');
  };

  const handleAppointmentSubmit = (e) => {
    e.preventDefault();
    const newAppointment = { date: appointmentDate, time: appointmentTime };
    setAppointments([...appointments, newAppointment]);
    setAppointmentDate('');
    setAppointmentTime('');
  };

  return (
    <div>
      <h1>Inter Pet</h1>

      <h2>Cadastro de Animais</h2>
      <form onSubmit={handlePetSubmit}>
        <input
          type="text"
          placeholder="Nome do Pet"
          value={petName}
          onChange={(e) => setPetName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Espécie"
          value={petSpecies}
          onChange={(e) => setPetSpecies(e.target.value)}
          required
        />
        <button type="submit">Cadastrar Pet</button>
      </form>

      <h2>Animais Cadastrados</h2>
      <ul>
        {pets.map((pet, index) => (
          <li key={index}>{pet.name} - {pet.species}</li>
        ))}
      </ul>

      <h2>Agendamento de Passeios</h2>
      <form onSubmit={handleAppointmentSubmit}>
        <input
          type="date"
          value={appointmentDate}
          onChange={(e) => setAppointmentDate(e.target.value)}
          required
        />
        <input
          type="time"
          value={appointmentTime}
          onChange={(e) => setAppointmentTime(e.target.value)}
          required
        />
        <button type="submit">Agendar Passeio</button>
      </form>

      <h2>Passeios Agendados</h2>
      <ul>
        {appointments.map((appointment, index) => (
          <li key={index}>{appointment.date} - {appointment.time}</li>
        ))}
      </ul>
    </div>
  );
};

export default PetApp;